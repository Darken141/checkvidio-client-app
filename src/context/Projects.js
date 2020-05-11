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
	createProject: () => {},
	updateProject: () => {},
	deleteProject: () => {}
});

export const ProjectsProvider = ({ children }) => {
	const currentUser = useContext(UserContext);
	const [ projects, setProjects ] = useState([]);
	const [ production, setProduction ] = useState(null);
	const [ loading, setLoading ] = useState(true);

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
			value={{ projects, production, loading, createProject, deleteProject, updateProject }}
		>
			{children}
		</ProjectsContext.Provider>
	);
};
