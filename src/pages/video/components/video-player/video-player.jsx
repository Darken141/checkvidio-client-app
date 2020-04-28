import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import { useApolloClient } from '@apollo/react-hooks';

import './video-player.styles.scss';

const VideoPlayer = ({ url }) => {
	const client = useApolloClient();
	const [ togglePlaying, setTogglePlaying ] = useState(false);

	const handleProgress = (state) => {
		client.writeData({ data: { playedSeconds: state.playedSeconds } });
	};

	return (
		<div className="player-wrapper">
			<div className="video-glass" onClick={() => setTogglePlaying(!togglePlaying)} />
			<ReactPlayer
				className="react-player"
				width="100%"
				height="100%"
				url={url}
				playing={togglePlaying}
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
