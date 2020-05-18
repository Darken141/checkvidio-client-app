import React, { useState, useContext } from 'react';
import { ProjectsContext } from '../../../../context/Projects';

import { DropdownItem } from '../navbar/navbar';
import VideoPlayer from '../../../video/components/video-player/video-player';

import { FaEnvelope, FaEllipsisV, FaEdit, FaTrash } from 'react-icons/fa';

import './overviewcard.styles.scss';

const Overviewcard = ({ id, idx, desc, videoUrl, name }) => {
	const { deleteProject, toggleEmailPopUp } = useContext(ProjectsContext);
	const [ open, setOpen ] = useState(false);

	return (
		<div className="project-overview__project component">
			<div className="project-overview__project-col">{idx + 1}.</div>
			<div className="project-overview__project-col">
				<VideoPlayer url={videoUrl} />
			</div>
			<div className="project-overview__project-col">
				<h3 className="title">{name}</h3>
				<p className="desc">{desc.slice(0, 150)}</p>
			</div>
			<div className="project-overview__project-col">
				<div className="icon-container">
					<div onClick={() => toggleEmailPopUp(id)} className="icon">
						<FaEnvelope />
					</div>
					<div className="icon more-menu" onClick={() => setOpen(!open)}>
						<FaEllipsisV />

						{open && (
							<div className="more-options">
								<DropdownItem to={`edit/${id}`} leftIcon={<FaEdit />}>
									Upravit
								</DropdownItem>
								<DropdownItem handleClick={() => deleteProject(id)} leftIcon={<FaTrash />}>
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
