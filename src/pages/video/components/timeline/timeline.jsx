import React, { useContext } from 'react';
import { NotesContext } from '../../../../context/Notes';
import { ProjectContext } from '../../../../context/Project';

import './timeline.styles.scss';

const Timeline = () => {
	const { notes } = useContext(NotesContext);
	const { videoDuration, seekToNoteTime } = useContext(ProjectContext);

	return (
		<div className="timeline">
			<div className="timeline--line">
				{notes.map((note) => {
					// console.log(note);

					return (
						<div
							key={note.id}
							style={{ left: `${note.time / (videoDuration / 100)}%` }}
							className={note.isDone ? 'timeline--line__note complete' : 'timeline--line__note'}
							onClick={() => seekToNoteTime(note.time)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Timeline;
