import React from 'react';
import Duration from '../../../../utils/duration';

import { FaTrashAlt } from 'react-icons/fa';

import './notes.styles.scss';

const Notes = () => {
	const notes = [];

	return (
		<div className="note-container">
			<label className="note-container__label">Vaše poznámky:</label>
			{notes.length === 0 ? <span className="no-notes">Ziadne poznámky</span> : null}
			{notes.map(({ _id, time, note, projectID }) => (
				<div key={_id} className="note">
					<div className="note__header">
						<p>
							Čas:{' '}
							{time === 0 ? (
								<span className="time">žiadny</span>
							) : (
								<Duration className="time" seconds={time} />
							)}
						</p>
						<div className="delete-icon">
							<FaTrashAlt />
						</div>
					</div>
					<div className="note__body">
						<p>{note}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Notes;
