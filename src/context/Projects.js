import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserContext } from './Auth';

import { getUserProduction, getVideoProjects } from '../firebase/firebase.utils';

export const ProjectsContext = createContext({
	production: null,
	projects: []
});

export const ProjectsProvider = ({ children }) => {
	const currentUser = useContext(UserContext);
	const [ projects, setProjects ] = useState([]);
	const [ production, setProduction ] = useState(null);

	useEffect(
		() => {
			// createUserProduction('Darken studio', currentUser.id);
			const getProductionAndProjects = async () => {
				const productionRef = await getUserProduction(currentUser.id);
				productionRef.onSnapshot(async (snapshot) => {
					setProduction({
						id: snapshot.id,
						...snapshot.data()
					});
					const projectsRef = await getVideoProjects(snapshot.id);
					const projectsArr = projectsRef.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
					setProjects(projectsArr);
				});
			};
			getProductionAndProjects();
		},
		[ currentUser ]
	);

	return <ProjectsContext.Provider value={{ projects, production }}>{children}</ProjectsContext.Provider>;
};
