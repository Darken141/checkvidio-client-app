import React, { useContext } from 'react';
import { UserContext } from '../../../context/Auth';
import { ProjectsContext } from '../../../context/Projects';

import OverviewCard from '../components/project-overview/overviewcard';

const Projects = () => {
	const currentUser = useContext(UserContext);
	const { projects } = useContext(ProjectsContext);

	console.log(projects);

	return (
		<main id="projects">
			<div className="component">Ahoj {currentUser.displayName}</div>

			<h2 className="heading">Moje projekty</h2>
			<div className="projects-list">
				<div className="project-overview__head component">
					<div className="project-overview__head-col ">#</div>
					<div className="project-overview__head-col ">Video</div>
					<div className="project-overview__head-col ">Popis</div>
					<div className="project-overview__head-col ">Možnosti</div>
				</div>

				{projects.map(({ id, desc, videoName, videoUrl, name }) => (
					<OverviewCard key={id} desc={desc} videoName={videoName} videoUrl={videoUrl} name={name} />
				))}
			</div>
		</main>
	);
};

export default Projects;
