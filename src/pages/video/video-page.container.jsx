import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECT } from '../../graphql/queries';
import { useParams } from 'react-router-dom';

import VideoPage from './video';
import Spinner from '../../components/spinner/spinner.component';
import ErrorMessage from '../../components/error-message/error-message';

const VideoPageContainer = () => {
	const { id } = useParams();
	const { data, loading, error } = useQuery(GET_PROJECT, { variables: { id } });

	if (loading) return <Spinner />;
	if (error) return <ErrorMessage error={error} />;

	if (data) {
		return <VideoPage project={data.getProject} />;
	}
};

export default VideoPageContainer;
