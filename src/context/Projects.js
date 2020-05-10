import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserContext } from './Auth';

import { getUserProduction, getVideoProjects } from '../firebase/firebase.utils';

export const ProjectsContext = createContext({
	production: null,
	projects: [],
	loading: true
});

export const ProjectsProvider = ({ children }) => {
	const currentUser = useContext(UserContext);
	const [ projects, setProjects ] = useState([]);
	const [ production, setProduction ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			// createUserProduction('Darken studio', currentUser.id);
			const getProductionAndProjects = async () => {
				setLoading(true);
				const productionRef = await getUserProduction(currentUser.id);
				productionRef.onSnapshot(async (snapshot) => {
					setProduction({
						id: snapshot.id,
						...snapshot.data()
					});
					const projectsRef = await getVideoProjects(snapshot.id);
					setProjects(projectsRef);
					setLoading(false);
				});
			};
			getProductionAndProjects();
		},
		[ currentUser ]
	);

	return <ProjectsContext.Provider value={{ projects, production, loading }}>{children}</ProjectsContext.Provider>;
};
