import React from 'react';

import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { default as AsideNavBar } from './components/aside-navbar/aside-navbar.container';
import Projects from './routes/projects';
import { default as ProjectPage } from './routes/project-page/project-page.container';
import { default as CreateProject } from './routes/create-project/create-project.container';

import Header from './components/header/header';

import './dashboard.styles.scss';

const Dashboard = ({ projects }) => {
	const match = useRouteMatch();

	return (
		<div id="dashboard">
			<Header />

			<AsideNavBar projects={projects} />

			<main id="dashboard__main">
				<Switch>
					<Route path={`${match.path}/create-project`}>
						<CreateProject />
					</Route>
					<Route path={`${match.path}/project/:id`}>
						<ProjectPage />
					</Route>
					<Route path={`${match.path}`}>
						<Projects projects={projects} />
					</Route>
				</Switch>
			</main>
			<footer id="dashboard__footer">
				<div>CODERKIN</div>

				<div>SOCIAL MEDIA</div>
			</footer>
		</div>
	);
};

export default Dashboard;
