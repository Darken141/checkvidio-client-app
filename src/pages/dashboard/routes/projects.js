import React, { useContext, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { UserContext } from '../../../context/Auth';

import { DropdownItem } from '../components/navbar/navbar';
import VideoPlayer from '../../video/components/video-player/video-player';
import { FaEnvelope, FaEllipsisV, FaEdit, FaTrash } from 'react-icons/fa';

const Projects = () => {
	const currentUser = useContext(UserContext);
	const match = useRouteMatch();
	const [ open, setOpen ] = useState(false);

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
							<Link to={`${match.url}/send-email/:id`} className="icon">
								<FaEnvelope />
							</Link>
							<div className="icon more-menu" onClick={() => setOpen(!open)}>
								<FaEllipsisV />

								{open && (
									<div className="more-options">
										<DropdownItem to="edit/:id" leftIcon={<FaEdit />}>
											Upravit
										</DropdownItem>
										<DropdownItem to="edit/:id" leftIcon={<FaTrash />}>
											Odstranit
										</DropdownItem>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Projects;
