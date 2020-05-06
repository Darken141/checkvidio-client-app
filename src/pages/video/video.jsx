import React from 'react';

import NoteForm from './components/note-form/note-form';
import Notes from './components/notes/notes';
import VideoPlayer from './components/video-player/video-player';
import { FaQuestionCircle } from 'react-icons/fa';

import Footer from '../../components/footer/footer';

import './video.styles.scss';

const VideoPage = ({ project }) => {
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
					<VideoPlayer />
					<h2>Project Name</h2>
					<div className="video-description component">
						<details>
							<summary>Popis</summary>
							<p className="desc">Project Desc</p>
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
