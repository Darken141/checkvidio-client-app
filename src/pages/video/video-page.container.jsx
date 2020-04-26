import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';

import VideoPage from './video';
import Spinner from '../../components/spinner/spinner.component';

const GET_PROJECT = gql`
	query GetProject($id: ID) {
		getProject(id: $id) {
			name
			desc
			videoName
			videoUrl
			clientEmail
			createdAt
		}
	}
`;

const VideoPageContainer = () => {
	const { id } = useParams();
	// console.log(params);
	const { data, loading, error } = useQuery(GET_PROJECT, { variables: { id } });

	if (loading) return <Spinner />;
	if (error) return <div>Nieco sa pokazilo</div>;

	if (data) {
		return <VideoPage project={data.getProject} />;
	}
};

export default VideoPageContainer;
