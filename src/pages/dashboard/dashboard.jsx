import React, { Suspense, lazy } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

// import Projects from './routes/projects';
import Spinner from '../../components/spinner/spinner.component';

// import Header from './components/header/header';
// import Footer from '../../components/footer/footer';

import { Header } from './components/navbar/navbar';

import './dashboard.styles.scss';

const Projects = lazy(() => import('./routes/projects'));
const HomePage = lazy(() => import('./routes/home-page/home-page'));
const CreateProject = lazy(() => import('./routes/create-project/create-project'));
const ProjectPage = lazy(() => import('./routes/project-page/project-page'));
const UserProfile = lazy(() => import('./routes/user-profile/user-profile'));
const EmailForm = lazy(() => import('../../components/email-form/email-form'));

const Dashboard = () => {
	const match = useRouteMatch();

	return (
		<div id="dashboard">
			<Header />
			<div className="container">
				<Switch>
					<Suspense fallback={<Spinner />}>
						<Route exact path={`${match.path}/projects`} component={Projects} />
						<Route exact path={`${match.path}/create-project`} component={CreateProject} />
						<Route exact path={`${match.path}/profile`} component={UserProfile} />
						<Route exact path={`${match.path}/`} component={HomePage} />
						<Route path={`${match.path}/edit/:id`} component={ProjectPage} />
						<Route path={`${match.path}/send-email/:id`} component={EmailForm} />
					</Suspense>
				</Switch>
			</div>
			{/*
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
			<Footer />*/}
		</div>
	);
};

export default Dashboard;
