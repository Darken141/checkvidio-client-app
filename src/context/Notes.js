import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectNotes, createProjectNote, deleteProjectNote, toggleNoteIsDone } from '../firebase/firebase.utils';

export const NotesContext = createContext({
	notes: [],
	loading: true,
	createNote: () => {},
	deleteNote: () => {},
	toggleIsDone: () => {}
});

export const NotesProvider = ({ children }) => {
	const { id } = useParams();
	const [ notes, setNotes ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const toggleIsDone = (noteId) => {
		toggleNoteIsDone(id, noteId);
	};

	const createNote = (note) => {
		createProjectNote(id, note);
	};

	const deleteNote = (noteId) => {
		let r = window.confirm('Chcete odstrániť tuto poznámku?');
		if (r) {
			deleteProjectNote(id, noteId);
		}
	};

	useEffect(
		() => {
			const getProjectNotesData = async () => {
				const notesRef = await getProjectNotes(id);
				notesRef.onSnapshot((snapShot) => {
					if (snapShot.empty) return setNotes([]);

					const noteArr = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
					setNotes(noteArr);
				});
			};
			getProjectNotesData();
			setLoading(false);
		},
		[ id ]
	);

	return (
		<NotesContext.Provider
			value={{
				notes,
				loading,
				deleteNote,
				createNote,
				toggleIsDone
			}}
		>
			{children}
		</NotesContext.Provider>
	);
};
