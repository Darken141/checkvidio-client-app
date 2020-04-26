import React, { useState } from 'react';

import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';
import AsideNavBar from './components/aside-navbar/aside-navbar';
import { FaBars, FaUserCircle, FaTimes } from 'react-icons/fa';
import Projects from './routes/projects';
import { default as CreateProject } from './routes/create-project/create-project.container';

import { useApolloClient } from '@apollo/react-hooks';

import './dashboard.styles.scss';

const Dashboard = ({ projects }) => {
	const client = useApolloClient();
	const match = useRouteMatch();
	const [ toggleAside, setToggleAside ] = useState(false);
	console.log(projects);

	return (
		<div id="dashboard">
			<header id="dashboard__header">
				<div className="logo__container">
					<h1 className="logo">CheckVid.io</h1>
				</div>
				<div className="menu-items">
					<div className="menu-icon" onClick={() => setToggleAside(!toggleAside)}>
						<FaBars />
					</div>

					<div
						className="user-menu-icon"
						onClick={() => {
							localStorage.removeItem('token');
							client.writeData({ data: { user: null } });
						}}
					>
						<FaUserCircle />
					</div>
				</div>
			</header>
			<aside id="dashboard__aside" className={toggleAside ? 'active' : ''}>
				<AsideNavBar />
				<div className="close-icon" onClick={() => setToggleAside(false)}>
					<FaTimes />
				</div>
			</aside>
			<main id="dashboard__main">
				<Switch>
					<Route path={`${match.path}/create-project`}>
						<CreateProject />
					</Route>
					<Route path={`${match.path}`}>
						<Projects projects={projects} />
					</Route>
					<Redirect to="/dashboard" />
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
