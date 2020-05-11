import React, { useContext } from 'react';
import { UserContext } from '../../../context/Auth';
import { ProjectsContext } from '../../../context/Projects';

import OverviewCard from '../components/project-overview/overviewcard';
import Spinner from '../../../components/spinner/spinner.component';

const Projects = () => {
	const currentUser = useContext(UserContext);
	const { projects, loading } = useContext(ProjectsContext);

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
				{loading && <Spinner />}
				{projects.map(({ id, desc, videoName, videoUrl, name }, idx) => (
					<OverviewCard
						key={id}
						id={id}
						idx={idx}
						desc={desc}
						videoName={videoName}
						videoUrl={videoUrl}
						name={name}
					/>
				))}
			</div>
		</main>
	);
};

export default Projects;
