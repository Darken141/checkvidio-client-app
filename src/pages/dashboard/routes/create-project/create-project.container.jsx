import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import CreateProject from './create-project';
import Spinner from '../../../../components/spinner/spinner.component';

const ADD_PROJECT = gql`
	mutation AddProject($name: String, $desc: String, $videoName: String, $videoUrl: String, $clientEmail: String) {
		addProject(name: $name, desc: $desc, videoName: $videoName, videoUrl: $videoUrl, clientEmail: $clientEmail) {
			_id
			name
			desc
			videoName
			videoUrl
			clientEmail
			createdBy
			createdAt
		}
	}
`;

const CreateProjectContainer = () => {
	const [ addProject, { data, loading, error } ] = useMutation(ADD_PROJECT);

	if (loading) return <Spinner />;
	if (error) return <div>Nieco sa pokazilo</div>;

	if (data) {
		return <div>Tvoj projekt bol vytvoreny</div>;
	}

	return <CreateProject addProject={addProject} />;
};

export default CreateProjectContainer;
