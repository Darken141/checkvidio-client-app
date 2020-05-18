import React, { useContext } from 'react';
import { ProjectContext } from '../../../../context/Project';
import ReactPlayer from 'react-player';

import './video-player.styles.scss';

const VideoPlayer = ({ url }) => {
	const { handleVideoState, playerRef, isPlaying } = useContext(ProjectContext);
	// const url = 'https://www.youtube.com/watch?v=rSgbYCdc4G0';
	const handleProgress = (state) => {
		handleVideoState(state);
	};

	return (
		<div className="player-wrapper">
			{/*<div className="video-glass" onClick={() => setTogglePlaying(!togglePlaying)} />*/}
			<ReactPlayer
				ref={playerRef}
				className="react-player"
				width="100%"
				height="100%"
				url={url}
				playing={isPlaying}
				controls={true}
				onStart={() => console.log('onStart')}
				onProgress={(state) => handleProgress(state)}
				config={{
					youtube: {
						playerVars: {
							modestbranding: 1,
							playsinline: 1,
							showinfo: 0
						}
					}
				}}
			/>
		</div>
	);
};

export default VideoPlayer;
