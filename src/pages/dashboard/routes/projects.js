import React, { useContext } from 'react';
import { UserContext } from '../../../context/Auth';

import VideoPlayer from '../../video/components/video-player/video-player';
import { FaEnvelope, FaEllipsisV } from 'react-icons/fa';

const Projects = () => {
	const currentUser = useContext(UserContext);

	return (
		<main id="projects">
			<div className="component">Ahoj {currentUser.displayName}</div>

			<h2 className="heading">Moje projekty</h2>
			<div className="projects-list">
				<div className="project-overview__head component">
					<div className="project-overview__head-col ">#</div>
					<div className="project-overview__head-col ">Video</div>
					<div className="project-overview__head-col ">Popis</div>
					<div className="project-overview__head-col ">Možnosti</div>
				</div>

				<div className="project-overview__project component">
					<div className="project-overview__project-col">1.</div>
					<div className="project-overview__project-col">
						<VideoPlayer />
					</div>
					<div className="project-overview__project-col">
						<h3 className="title">Video name</h3>
						<p className="desc">
							Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth
							tatsoi tomatillo melon azuki bean garlic.
						</p>
					</div>
					<div className="project-overview__project-col">
						<div className="icon-container">
							<div className="icon">
								<FaEnvelope />
							</div>
							<div className="icon">
								<FaEllipsisV />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Projects;
