import React from 'react';

import NoteForm from './components/note-form/note-form';
import Notes from './components/notes/notes';
import VideoPlayer from './components/video-player/video-player';
import { FaQuestionCircle } from 'react-icons/fa';

import './video.styles.scss';

const VideoPage = () => {
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
					<h2>Video name</h2>
					<div className="video-description">
						<details>
							<summary>Video description</summary>
							<p>
								Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon
								amaranth tatsoi tomatillo melon azuki bean garlic.
							</p>
							<p>
								Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea
								sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
								earthnut pea peanut soko zucchini.
							</p>
						</details>
					</div>
				</div>
			</main>
			<aside id="video-page__aside">
				<NoteForm />
				<Notes />
			</aside>

			<footer id="video-page__footer">FOOTER</footer>
		</div>
	);
};

export default VideoPage;
