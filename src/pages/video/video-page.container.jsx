import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECT } from '../../graphql/queries';
import { useParams } from 'react-router-dom';

import VideoPage from './video';
import Spinner from '../../components/spinner/spinner.component';

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
