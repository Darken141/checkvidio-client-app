import React from 'react';
import Duration from '../../../../utils/duration';

import { FaTrashAlt } from 'react-icons/fa';

import './notes.styles.scss';

const Notes = ({ notes, deleteNote, loading }) => {
	return (
		<div className="note-container">
			<label className="note-container__label">Vaše poznámky:</label>
			{notes.length === 0 ? <span className="no-notes">Ziadne poznámky</span> : null}
			{notes.map(({ _id, time, note }) => (
				<div key={_id} className={loading ? 'note loading component' : 'note component'}>
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
							<div
								className="delete-icon"
								onClick={() =>
									deleteNote({ variables: { id: _id }, refetchQueries: [ 'GetProjectNotes' ] })}
							>
								<FaTrashAlt />
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
