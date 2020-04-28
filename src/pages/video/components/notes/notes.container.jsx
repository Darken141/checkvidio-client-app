import React from 'react';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';

import Notes from './notes';
import Spinner from '../../../../components/spinner/spinner.component';

// "5ea5d1915176cd0018406642"

export const GET_PROJECT_NOTES = gql`
	query GetProjectNotes($id: ID) {
		getProjectNotes(id: $id) {
			_id
			time
			note
			isDone
		}
	}
`;

const DELETE_NOTE = gql`
	mutation DeleteNote($id: ID) {
		deleteNote(id: $id) {
			_id
			time
			note
			isDone
			projectId
		}
	}
`;

const NotesContainer = () => {
	const { id } = useParams();
	const { data, loading, error } = useQuery(GET_PROJECT_NOTES, { variables: { id } });
	const [ deleteNote, props ] = useMutation(DELETE_NOTE);

	if (loading) return <Spinner />;
	if (error) return <div>Nieco sa pokazilo...</div>;
	if (data) {
		return <Notes notes={data.getProjectNotes} deleteNote={deleteNote} loading={props.loading} />;
	}
};

export default NotesContainer;
