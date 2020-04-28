import React, { useEffect } from 'react';

// PAGES
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import { default as Dashboard } from './pages/dashboard/dashboard.container';
import { default as VideoPage } from './pages/video/video-page.container';
import ConfirmEmail from './pages/confirm-email/confirm-email';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { gql } from 'apollo-boost';
import { useQuery, useApolloClient } from '@apollo/react-hooks';

import './App.scss';

const GET_USER = gql`
	{
		user @client
	}
`;

const App = () => {
	const { data: { user } } = useQuery(GET_USER);
	const client = useApolloClient();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			client.writeData({ data: { user: localStorage.getItem('token') } });
		}
		if (user) {
			localStorage.setItem('token', user);
		}
	});

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/video/:id" component={VideoPage} />
				<Route exact path="/login">
					{user ? <Redirect to="/dashboard" /> : <SignIn />}
				</Route>
				<Route exact path="/sign-up">
					{user ? <Redirect to="/dashboard" /> : <SignUp />}
				</Route>
				<Route path="/dashboard">{user ? <Dashboard /> : <Redirect to="/login" />}</Route>
				<Route path="/email/:id">
					<ConfirmEmail />
				</Route>
				{!user ? <Redirect from="*" to="/login" /> : <Redirect to="/dashboard" />}
			</Switch>
		</BrowserRouter>
	);
};

export default App;
