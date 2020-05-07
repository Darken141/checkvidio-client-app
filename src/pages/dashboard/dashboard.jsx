import React, { useContext } from 'react';
import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';

import AsideNavBar from './components/aside-navbar/aside-navbar';
import Projects from './routes/projects';
import ProjectPage from './routes/project-page/project-page';
import CreateProject from './routes/create-project/create-project';
import UserProfile from './routes/user-profile/user-profile';
import EmailForm from '../../components/email-form/email-form';

import Header from './components/header/header';
import Footer from '../../components/footer/footer';

import './dashboard.styles.scss';

const Dashboard = () => {
	const match = useRouteMatch();

	return (
		<div id="dashboard">
			<Header />

			<AsideNavBar projects={[]} />

			<main id="dashboard__main">
				<Switch>
					<Route path={`${match.path}/profile`}>
						<UserProfile />
					</Route>
					<Route path={`${match.path}/create-project`}>
						<CreateProject />
					</Route>

					<Route path={`${match.path}/project/:id`}>
						<ProjectPage />
					</Route>

					<Route path={`${match.path}/project/:id/send-email`}>
						<EmailForm />
					</Route>

					<Route path={`${match.path}`}>
						<Projects projects={[]} />
					</Route>
				</Switch>
			</main>
			<Footer />
		</div>
	);
};

export default Dashboard;
