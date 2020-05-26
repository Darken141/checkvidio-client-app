import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserContext } from './Auth';

import {
	getUserProduction,
	getVideoProjects,
	createVideoProject,
	deleteVideoProject,
	updateVideoProject,
	updateUserProductionName,
	getProjectNotes
} from '../firebase/firebase.utils';

export const ProjectsContext = createContext({
	production: null,
	projects: [],
	loading: true,
	showEmailPopUp: false,
	selectedProjectUrl: '',
	sendingEmail: false,
	showProductionPopUp: false,
	toggleEmailPopUp: () => {},
	toggleProductionPopUp: () => {},
	closeEmailPopUp: () => {},
	closeProductionPopUp: () => {},
	createProject: () => {},
	updateProject: () => {},
	deleteProject: () => {},
	sendInviteEmail: () => {},
	updateProductionName: () => {},
	getNotesCount: () => {}
});

export const ProjectsProvider = ({ children }) => {
	const currentUser = useContext(UserContext);
	const [ projects, setProjects ] = useState([]);
	const [ production, setProduction ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ showEmailPopUp, setShowEmailPopUp ] = useState(false);
	const [ selectedProjectId, setSelectedProjectId ] = useState('');
	const [ selectedProjectUrl, setSelectedProjectUrl ] = useState('');
	const [ sendingEmail, setSendingEmail ] = useState(false);
	const [ showProductionPopUp, setShowProductionPopUp ] = useState(false);

	const getNotesCount = async (projectId) => {
		const noteRef = await getProjectNotes(projectId);
		const noteSnapshot = await noteRef.get();
		return noteSnapshot.docs.length;
	};

	const updateProductionName = (productionName) => {
		updateUserProductionName(production.id, productionName);
		setShowProductionPopUp(false);
	};

	const sendInviteEmail = async (email) => {
		setSendingEmail(true);

		const response = await fetch(
			`${process.env
				.REACT_APP_EMAIL_ENDPOINT}?email=${email}&prodName=${production.productionName}&projectId=${selectedProjectId}`
		);

		const data = await response.json();

		if (data.success) {
			setSendingEmail(false);
			setShowEmailPopUp(false);
			return alert(data.success);
		}

		if (data.error) {
			setSendingEmail(false);
			setShowEmailPopUp(false);
			return alert(data.error);
		}
	};

	const toggleEmailPopUp = (id) => {
		setShowEmailPopUp(!showEmailPopUp);
		setSelectedProjectUrl(`https://www.app.checkvid.io/video/${id}`);
		setSelectedProjectId(id);
	};

	const toggleProductionPopUp = () => {
		setShowProductionPopUp(!showProductionPopUp);
	};

	const closeEmailPopUp = () => {
		setShowEmailPopUp(false);
	};

	const closeProductionPopUp = () => {
		setShowProductionPopUp(false);
	};

	const createProject = (projectData) => {
		createVideoProject(projectData);
	};

	const updateProject = (projectId, projectData) => {
		updateVideoProject(projectId, projectData);
	};

	const deleteProject = (projectId) => {
		let r = window.confirm('Chcete odstranit tento projekt?');
		if (r) deleteVideoProject(projectId);
	};

	useEffect(
		() => {
			const getProductionAndProjects = async () => {
				setLoading(true);
				const productionRef = await getUserProduction(currentUser.id);
				productionRef.onSnapshot((productionSnapshot) => {
					setProduction({
						id: productionSnapshot.id,
						...productionSnapshot.data()
					});
				});
				const projectsRef = await getVideoProjects(currentUser.production);
				projectsRef.onSnapshot(async (projectsSnapshot) => {
					if (projectsSnapshot.empty) {
						setProjects([]);
						return setLoading(false);
					}

					setProjects(
						projectsSnapshot.docs.map((doc) => ({
							id: doc.id,
							...doc.data()
						}))
					);
					setLoading(false);
				});
			};
			getProductionAndProjects();
		},
		[ currentUser ]
	);

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				production,
				loading,
				showEmailPopUp,
				selectedProjectUrl,
				sendingEmail,
				showProductionPopUp,
				toggleEmailPopUp,
				toggleProductionPopUp,
				closeEmailPopUp,
				closeProductionPopUp,
				createProject,
				deleteProject,
				updateProject,
				sendInviteEmail,
				updateProductionName,
				getNotesCount
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
};
