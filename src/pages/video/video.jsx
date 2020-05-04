import React, { useState } from 'react';

import { default as NoteForm } from './components/note-form/note-form.container';
import { default as Notes } from './components/notes/notes.container';
import VideoPlayer from './components/video-player/video-player';
import { FaQuestionCircle } from 'react-icons/fa';
import HelpGuide from '../../components/help-guide/help-guide';
import { Link } from 'react-router-dom';

import Footer from '../../components/footer/footer';

import './video.styles.scss';

const VideoPage = ({ project }) => {
	const [ showHelp, setShowHelp ] = useState(false);

	return (
		<div id="video-page">
			<header id="video-page__header">
				<div className="logo-container">
					<h1 className="logo">CheckVid.io</h1>
				</div>

				<div className="menu-items">
					{localStorage.getItem('token') ? <Link to="/">Admin panel</Link> : null}
					<div className="help_icon" onClick={() => setShowHelp(!showHelp)}>
						<FaQuestionCircle />
					</div>
				</div>
			</header>
			{showHelp ? <HelpGuide /> : null}
			<main id="video-page__main">
				<div className="video-container">
					<VideoPlayer url={project.videoUrl} />
					<h2>{project.name}</h2>
					<div className="video-description component">
						<details>
							<summary>Popis</summary>
							<p className="desc">{project.desc}</p>
						</details>
					</div>
				</div>
			</main>
			<aside id="video-page__aside">
				<NoteForm />
				<Notes />
			</aside>

			<Footer />
		</div>
	);
};

export default VideoPage;
