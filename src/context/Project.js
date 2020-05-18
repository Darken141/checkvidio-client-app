import React, { createContext, useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoProject } from '../firebase/firebase.utils';

import Spinner from '../components/spinner/spinner.component';

export const ProjectContext = createContext({
	isPlaying: false,
	playerRef: null,
	project: null,
	videoState: null,
	startPlayVideo: () => {},
	stopPlayVideo: () => {},
	seekToNoteTime: () => {},
	handleVideoState: () => {}
});

export const ProjectProvider = ({ children }) => {
	const playerRef = useRef();
	const { id } = useParams();
	const [ project, setProject ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ isPlaying, setIsPlaying ] = useState(false);

	const [ videoState, setVideoState ] = useState(null);

	const startPlayVideo = () => {
		setIsPlaying(true);
	};

	const stopPlayVideo = () => {
		setIsPlaying(false);
	};

	const seekToNoteTime = (time) => {
		playerRef.current.seekTo(time, 'seconds');
		setIsPlaying(true);
	};

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
		<ProjectContext.Provider
			value={{
				isPlaying,
				playerRef,
				project,
				videoState,
				handleVideoState,
				seekToNoteTime,
				startPlayVideo,
				stopPlayVideo
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};
