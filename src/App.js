import React from 'react';

// PAGES
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import Dashboard from './pages/dashboard/dashboard';
import VideoPage from './pages/video/video';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/sign-up" component={SignUp} />
				<Route exact path="/login" component={SignIn} />
				<Route path="/video/:id" component={VideoPage} />
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
