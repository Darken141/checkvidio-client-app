import React from 'react';
import Duration from '../../../../utils/duration';

import { FaTrashAlt, FaCheck } from 'react-icons/fa';

import './notes.styles.scss';

const Notes = () => {
	const notes = [];
	return (
		<div className="note-container">
			<label className="note-container__label">Vaše poznámky:</label>
			{notes.length === 0 ? <span className="no-notes">Ziadne poznámky</span> : null}
			{notes.map(({ _id, time, note, isDone }) => (
				<div key={_id} className={isDone ? 'note complete component' : 'note component'}>
					<div className="note__header">
						<p>
							Čas:{' '}
							{time === 0 ? (
								<span className="time">žiadny</span>
							) : (
								<Duration className="time" seconds={time} />
							)}
						</p>
						{localStorage.getItem('token') ? (
							<div className="icon-container">
								<div className="check icon">
									<FaCheck />
								</div>
								<div className="delete icon">
									<FaTrashAlt />
								</div>
							</div>
						) : null}
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
