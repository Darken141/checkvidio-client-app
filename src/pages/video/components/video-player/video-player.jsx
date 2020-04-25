import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import './video-player.styles.scss';

const VideoPlayer = () => {
	const [ togglePlaying, setTogglePlaying ] = useState(false);
	const url = 'https://www.youtube.com/watch?v=P37Cf4q1Qjc';

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
				// onProgress={(state) => handleProgress(state)}
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
