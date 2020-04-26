import React from 'react';

import VideoPlayer from '../../../video/components/video-player/video-player';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import './overviewcard.styles.scss';

const Overviewcard = ({ name, videoUrl }) => {
	return (
		<div className="overviewcard">
			<VideoPlayer url={videoUrl} />
			<div className="overviewcard__body">
				<div>
					<h2>{name}</h2>
				</div>
				<div className="overviewcard-icons">
					<div className="mail-icon">
						<IoIosMail />
					</div>
					<div className="edit-icon">
						<FaRegEdit />
					</div>
					<div className="delete-icon">
						<FaRegTrashAlt />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overviewcard;
