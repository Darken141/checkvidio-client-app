import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import NoteForm from './note-form';
import Spinner from '../../../../components/spinner/spinner.component';

const ADD_NOTE = gql`
	mutation AddNote($time: Float, $note: String, $projectId: String) {
		addNote(time: $time, note: $note, projectId: $projectId) {
			_id
			time
			note
			isDone
			projectId
		}
	}
`;

const NoteFormContainer = () => {
	const [ addNote, { data, loading, error } ] = useMutation(ADD_NOTE);

	if (loading) return <Spinner />;
	if (error) return <div>Nieco sa pokazilo...</div>;

	return <NoteForm addNote={addNote} />;
};

export default NoteFormContainer;
