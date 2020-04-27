import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Overviewcard from './overviewcard';
import Spinner from '../../../../components/spinner/spinner.component';

const DELETE_PROJECT = gql`
	mutation DeleteProject($id: ID) {
		deleteProject(id: $id) {
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

const OverviewcardContainer = ({ ...props }) => {
	const [ deleteProject, { loading, error } ] = useMutation(DELETE_PROJECT);

	if (loading) return <Spinner />;
	if (error) return <div>Nieco sa pokazilo...</div>;

	return <Overviewcard {...props} deleteProject={deleteProject} />;
};

export default OverviewcardContainer;
