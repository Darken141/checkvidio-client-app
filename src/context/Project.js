import React, { createContext, useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoProject } from '../firebase/firebase.utils';

import Spinner from '../components/spinner/spinner.component';

export const ProjectContext = createContext({
	isPlaying: false,
	playerRef: null,
	project: null,
	videoState: null,
	videoDuration: 0,
	startPlayVideo: () => {},
	stopPlayVideo: () => {},
	seekToNoteTime: () => {},
	handleVideoState: () => {},
	getVideoDuration: () => {}
});

export const ProjectProvider = ({ children }) => {
	const playerRef = useRef();
	const { id } = useParams();
	const [ project, setProject ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ videoDuration, setVideoDuration ] = useState(0);

	const [ videoState, setVideoState ] = useState(null);

	const getVideoDuration = (dur) => {
		setVideoDuration(dur);
	};

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
				videoDuration,
				isPlaying,
				playerRef,
				project,
				videoState,
				handleVideoState,
				seekToNoteTime,
				startPlayVideo,
				stopPlayVideo,
				getVideoDuration
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};
