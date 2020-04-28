import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { DELETE_PROJECT } from '../../../../graphql/queries';

import Overviewcard from './overviewcard';
import Spinner from '../../../../components/spinner/spinner.component';

const OverviewcardContainer = ({ ...props }) => {
	const [ deleteProject, { loading, error } ] = useMutation(DELETE_PROJECT);

	if (loading) return <Spinner />;
	if (error) return <div>Nieco sa pokazilo...</div>;

	return <Overviewcard {...props} deleteProject={deleteProject} />;
};

export default OverviewcardContainer;
