import React from 'react';

// PAGES
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import Dashboard from './pages/dashboard/dashboard';
import VideoPage from './pages/video/video';
import ConfirmEmail from './pages/confirm-email/confirm-email';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/video/:id" component={VideoPage} />
				<Route exact path="/login">
					<SignIn />
				</Route>
				<Route exact path="/sign-up">
					<SignUp />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/email/:id">
					<ConfirmEmail />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
