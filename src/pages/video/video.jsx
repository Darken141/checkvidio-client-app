import React from 'react';

import { default as NoteForm } from './components/note-form/note-form.container';
import { default as Notes } from './components/notes/notes.container';
import VideoPlayer from './components/video-player/video-player';
import { FaQuestionCircle, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import './video.styles.scss';

const VideoPage = ({ project }) => {
	console.log(project);

	return (
		<div id="video-page">
			<header id="video-page__header">
				<div className="logo-container">
					<h1 className="logo">CheckVid.io</h1>
				</div>

				<div className="menu-items">
					<div className="help_icon">
						<FaQuestionCircle />
					</div>
				</div>
			</header>
			<main id="video-page__main">
				<div className="video-container">
					<VideoPlayer url={project.videoUrl} />
					<h2>{project.name}</h2>
					<div className="video-description">
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

			<footer id="video-page__footer">
				<div className="row">
					<div className="col">&copy; CODERKIN</div>
					<div className="col icons">
						<div className="facebook-icon">
							<FaFacebookSquare />
						</div>
						<div className="instagram-icon">
							<FaInstagram />
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default VideoPage;
