import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECT } from '../../../../graphql/queries';
import { useParams } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

import Spinner from '../../../../components/spinner/spinner.component';

import './project-page.styles.scss';

const ProjectPage = () => {
	const { id } = useParams();
	const { data, loading, error } = useQuery(GET_PROJECT, { variables: { id } });

	if (loading) return <Spinner />;
	if (error) return <div>Nieco sa pokazilo...</div>;
	if (data) {
		const { name, createdAt, videoName, desc } = data.getProject;

		return (
			<section id="project-page">
				<h1>Project info</h1>
				<div className="project-header">
					<h2>{name}</h2>
					<p>{createdAt}</p>
				</div>

				<div className="project-options">
					<div className="send-email">
						<FaEnvelope />
					</div>
				</div>

				<div className="project-body">
					<h2>{videoName}</h2>
					<p>{desc}</p>
				</div>
			</section>
		);
	}

	return <div>Nenasiel sa ziaden projekt</div>;
};

export default ProjectPage;
