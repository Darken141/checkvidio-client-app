import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

import Projects from './routes/projects';
import CreateProject from './routes/create-project/create-project';
import ProjectPage from './routes/project-page/project-page';
// import UserProfile from './routes/user-profile/user-profile';
import EmailForm from '../../components/email-form/email-form';

// import Header from './components/header/header';
// import Footer from '../../components/footer/footer';

import { Header } from './components/navbar/navbar';

import './dashboard.styles.scss';

const Dashboard = () => {
	const match = useRouteMatch();
	console.log(match);

	return (
		<div id="dashboard">
			<Header />
			<div className="container">
				<Switch>
					<Route exact path={`${match.path}/`} component={Projects} />
					<Route exact path={`${match.path}/create-project`} component={CreateProject} />
					<Route path={`${match.path}/edit/:id`} component={ProjectPage} />
					<Route path={`${match.path}/send-email/:id`} component={EmailForm} />
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
