import React from 'react';

import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_PROJECT } from '../../../../graphql/queries';

import Spinner from '../../../../components/spinner/spinner.component';
import ProjectPage from './project-page';

const ProjectPageContainer = () => {
	const [ updateProject, { loading, error } ] = useMutation(UPDATE_PROJECT);

	if (loading) return <Spinner />;
	if (error) return <div>Nieco sa pokazilo</div>;

	return <ProjectPage updateProject={updateProject} />;
};

export default ProjectPageContainer;
