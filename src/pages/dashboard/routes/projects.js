import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import Overviewcard from '../components/project-overview/overviewcard';
import { useRouteMatch } from 'react-router-dom';

const Projects = ({ projects }) => {
	const match = useRouteMatch();

	return (
		<section id="projects">
			<div className="projects__header">
				<h1>Projects</h1>
				<div className="plus-icon">
					<Link to={`${match.url}/create-project`}>
						<FaPlus />
					</Link>
				</div>
			</div>

			{projects.map(({ _id, name, videoUrl }) => <Overviewcard key={_id} name={name} videoUrl={videoUrl} />)}
		</section>
	);
};

export default Projects;
