import React from 'react';

import VideoPlayer from '../../../video/components/video-player/video-player';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { handleNameLength } from '../../../../utils/handleNameLength';

import './overviewcard.styles.scss';

const Overviewcard = ({ name, videoUrl, deleteProject, id }) => {
	const handleDeleteProject = () => {
		let r = window.confirm('Chcete odstranit tento projekt?');
		if (r) {
			deleteProject({ variables: { id }, refetchQueries: [ 'GetUserProjects' ] });
		}
	};

	return (
		<div className="overviewcard component">
			<VideoPlayer url={videoUrl} />
			<div className="overviewcard__body">
				<div>
					<h2>
						<Link to={`/dashboard/project/${id}`}>{handleNameLength(name)}</Link>
					</h2>
				</div>
				<div className="overviewcard-icons">
					<div className="delete-icon" onClick={handleDeleteProject}>
						<FaRegTrashAlt />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overviewcard;
