import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserContext } from './Auth';

import {
	getUserProduction,
	getVideoProjects,
	createVideoProject,
	deleteVideoProject,
	updateVideoProject
} from '../firebase/firebase.utils';

export const ProjectsContext = createContext({
	production: null,
	projects: [],
	loading: true,
	showEmailPopUp: false,
	selectedProjectUrl: '',
	sendingEmail: false,
	toggleEmailPopUp: () => {},
	createProject: () => {},
	updateProject: () => {},
	deleteProject: () => {},
	sendInviteEmail: () => {}
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
				productionRef.onSnapshot(async (snapshot) => {
					setProduction({
						id: snapshot.id,
						...snapshot.data()
					});
					const projectsRef = await getVideoProjects(snapshot.id);
					projectsRef.onSnapshot((snapshot) => {
						const projectsArr = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
						setProjects(projectsArr);
					});
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
				toggleEmailPopUp,
				createProject,
				deleteProject,
				updateProject,
				sendInviteEmail
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
};
