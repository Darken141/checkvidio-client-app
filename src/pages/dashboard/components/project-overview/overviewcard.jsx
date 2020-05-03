import React from 'react';

import VideoPlayer from '../../../video/components/video-player/video-player';
import { FaRegTrashAlt, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { handleNameLength } from '../../../../utils/handleNameLength';

import './overviewcard.styles.scss';

const Overviewcard = ({ name, videoUrl, deleteProject, deleteProjectNotes, id }) => {
	const handleDeleteProject = () => {
		let r = window.confirm('Chcete odstranit tento projekt?');
		if (r) {
			deleteProject({ variables: { id }, refetchQueries: [ 'GetUserProjects' ] });
			deleteProjectNotes({ variables: { id } });
		}
	};

	return (
		<div className="overviewcard component">
			<VideoPlayer url={videoUrl} />
			<div className="overviewcard__body">
				<div>
					<h2>
						<Link to={`/video/${id}`}>{handleNameLength(name)}</Link>
					</h2>
				</div>
				<div className="overviewcard-icons">
					<div className="settings icon">
						<Link to={`/dashboard/project/${id}`}>
							<FaCog />
						</Link>
					</div>
					<div className="delete icon" onClick={handleDeleteProject}>
						<FaRegTrashAlt />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overviewcard;
