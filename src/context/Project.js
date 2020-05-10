import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoProject } from '../firebase/firebase.utils';

import Spinner from '../components/spinner/spinner.component';

export const ProjectContext = createContext({
	project: null,
	videoState: null,
	seekToNoteTime: () => {},
	handleVideoState: () => {}
});

export const ProjectProvider = ({ children }) => {
	const { id } = useParams();
	const [ project, setProject ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	const [ videoState, setVideoState ] = useState(null);

	const handleVideoState = (state) => {
		setVideoState(state);
	};

	useEffect(
		() => {
			const getProjectData = async () => {
				const projectRef = await getVideoProject(id);
				projectRef.onSnapshot((snapShot) => {
					if (snapShot.exists) setProject({ id: snapShot.id, ...snapShot.data() });
				});
			};

			getProjectData();
			setLoading(false);
		},
		[ id ]
	);

	if (loading) return <Spinner />;

	return (
		<ProjectContext.Provider value={{ project, videoState, handleVideoState }}>{children}</ProjectContext.Provider>
	);
};
