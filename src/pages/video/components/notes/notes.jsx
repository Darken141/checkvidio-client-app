import React, { useContext } from 'react';
import { UserContext } from '../../../../context/Auth';
import { NotesContext } from '../../../../context/Notes';
import Duration from '../../../../utils/duration';

import Spinner from '../../../../components/spinner/spinner.component';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';

import './notes.styles.scss';

const Notes = () => {
	const currentUser = useContext(UserContext);
	const { notes, loading, deleteNote, toggleIsDone } = useContext(NotesContext);

	if (loading) return <Spinner />;
	return (
		<div className="note-container">
			<label className="note-container__label">Vaše poznámky:</label>
			{notes.length === 0 ? <span className="no-notes">Ziadne poznámky</span> : null}
			{notes.map(({ id, time, note, isDone }) => (
				<div key={id} className={isDone ? 'note complete component' : 'note component'}>
					<div className="note__header">
						<p>
							Čas:{' '}
							{time === 0 ? (
								<span className="time">žiadny</span>
							) : (
								<Duration className="time" seconds={time} />
							)}
						</p>
						{currentUser && (
							<div className="icon-container">
								<div className="check icon" onClick={() => toggleIsDone(id)}>
									<FaCheck />
								</div>
								<div className="delete icon" onClick={() => deleteNote(id)}>
									<FaTrashAlt />
								</div>
							</div>
						)}
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
