import React, { useContext, useState, useRef, useEffect } from 'react';
import { ProjectsContext } from '../../../../context/Projects';
import { DropdownItem } from '../navbar/navbar';
import VideoPlayer from '../../../video/components/video-player/video-player';
import { Link } from 'react-router-dom';

import { FaEnvelope, FaEllipsisV, FaEdit, FaTrash } from 'react-icons/fa';
import { AiOutlineProfile } from 'react-icons/ai';

import './overviewcard.styles.scss';

const Overviewcard = ({ id, idx, desc, videoUrl, name }) => {
	const { deleteProject, toggleEmailPopUp, getNotesCount } = useContext(ProjectsContext);
	const [ open, setOpen ] = useState(false);
	const dropdownMenuRef = useRef(null);
	const [ count, setCount ] = useState(0);

	useEffect(() => {
		const getCount = async () => {
			let count = await getNotesCount(id);
			return setCount(count);
		};
		getCount();
	});

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
					<Link to={`/video/${id}`} className="notes-count icon">
						<AiOutlineProfile /> {count}
					</Link>
					<div onClick={() => toggleEmailPopUp(id)} className="icon">
						<FaEnvelope />
					</div>
					<div className="icon more-menu" onClick={() => setOpen(!open)}>
						<FaEllipsisV />

						{open && (
							<div className="more-options" ref={dropdownMenuRef}>
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
