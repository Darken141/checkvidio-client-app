import React from 'react';
import Overviewcard from '../components/project-overview/overviewcard';

const Projects = ({ projects }) => {
	return (
		<section id="projects">
			<h1 className="heading">Moje projekty</h1>

			<div className="projects-container">
				{projects.map(({ _id, name, videoUrl }) => (
					<Overviewcard key={_id} name={name} videoUrl={videoUrl} id={_id} />
				))}
			</div>
		</section>
	);
};

export default Projects;
