import React from 'react';

import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import { GET_PROJECT_NOTES, DELETE_NOTE, TOGGLE_IS_DONE } from '../../../../graphql/queries';
import { useParams } from 'react-router-dom';

import Notes from './notes';
import Spinner from '../../../../components/spinner/spinner.component';
import ErrorMessage from '../../../../components/error-message/error-message';

// "5ea5d1915176cd0018406642"

const NotesContainer = () => {
	const { id } = useParams();
	const { data, loading, error } = useQuery(GET_PROJECT_NOTES, { variables: { id } });
	const [ deleteNote, props ] = useMutation(DELETE_NOTE);
	const [ toggleIsDone ] = useMutation(TOGGLE_IS_DONE);
	const client = useApolloClient();

	const setSeekValue = (time) => {
		client.writeData({ data: { seekValue: time } });
	};

	if (loading) return <Spinner />;
	if (error) return <ErrorMessage error={error} />;
	if (data) {
		return (
			<Notes
				notes={data.getProjectNotes}
				deleteNote={deleteNote}
				loading={props.loading}
				toggleIsDone={toggleIsDone}
				setSeekValue={setSeekValue}
			/>
		);
	}
};

export default NotesContainer;
