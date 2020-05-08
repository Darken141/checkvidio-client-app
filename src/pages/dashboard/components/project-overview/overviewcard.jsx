import React, { useState } from 'react';

import { DropdownItem } from '../navbar/navbar';
import VideoPlayer from '../../../video/components/video-player/video-player';
import { Link, useRouteMatch } from 'react-router-dom';

import { FaEnvelope, FaEllipsisV, FaEdit, FaTrash } from 'react-icons/fa';

import './overviewcard.styles.scss';

const Overviewcard = ({ desc, videoUrl, name }) => {
	const match = useRouteMatch();
	const [ open, setOpen ] = useState(false);

	const handleDeleteProject = () => {
		let r = window.confirm('Chcete odstranit tento projekt?');
		if (r) {
		}
	};

	return (
		<div className="project-overview__project component">
			<div className="project-overview__project-col">1.</div>
			<div className="project-overview__project-col">
				<VideoPlayer url={videoUrl} />
			</div>
			<div className="project-overview__project-col">
				<h3 className="title">{name}</h3>
				<p className="desc">{desc.slice(0, 150)}</p>
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
	);
};

export default Overviewcard;
