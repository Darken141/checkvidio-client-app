import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// CONTEXT
import { NotesProvider } from '../../context/Notes';
import { ProjectContext } from '../../context/Project';
import { UserContext } from '../../context/Auth';

import NoteForm from './components/note-form/note-form';
import Notes from './components/notes/notes';
import VideoPlayer from './components/video-player/video-player';
// import { FaQuestionCircle } from 'react-icons/fa';

import Footer from '../../components/footer/footer';

import './video.styles.scss';

const VideoPage = () => {
	const currentUser = useContext(UserContext);
	const { project } = useContext(ProjectContext);
	if (!project) return <div>Loading...</div>;

	return (
		<div id="video-page">
			<header id="video-page__header">
				<div className="logo-container">
					<Link to="/login" className="logo">
						CheckVid.io
					</Link>
				</div>

				<div className="menu-items">
					{currentUser && <Link to="/dashboard">Admin panel</Link>}
					{/*<div className="help_icon">
						<FaQuestionCircle />
	</div>*/}
				</div>
			</header>
			<main id="video-page__main">
				<div className="video-container">
					<div className="component">
						<VideoPlayer url={project.videoUrl} />
					</div>
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
				<NotesProvider>
					<NoteForm />
					<Notes />
				</NotesProvider>
			</aside>

			<Footer />
		</div>
	);
};

export default VideoPage;
