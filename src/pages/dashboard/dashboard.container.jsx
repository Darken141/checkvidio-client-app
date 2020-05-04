import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Dashboard from './dashboard';
import Spinner from '../../components/spinner/spinner.component';

const GET_USER_PROJECTS = gql`
	query GetUserProjects {
		getUserProjects {
			_id
			name
			desc
			videoName
			videoUrl
			createdAt
		}
	}
`;

const DashboardContainer = () => {
	const { data, loading } = useQuery(GET_USER_PROJECTS);

	if (loading) return <Spinner />;

	return <Dashboard projects={data.getUserProjects} />;
};

export default DashboardContainer;
