import React, { useContext } from 'react';

// CONTEXT
import { ProjectsProvider } from './context/Projects';
import { ProjectProvider } from './context/Project';

// PAGES
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import Dashboard from './pages/dashboard/dashboard';
import VideoPage from './pages/video/video';
import ConfirmEmail from './pages/confirm-email/confirm-email';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/Auth';

import './App.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/login">
					<SignIn />
				</Route>
				<Route exact path="/sign-up">
					<SignUp />
				</Route>
				<Route path="/video/:id">
					<ProjectProvider>
						<VideoPage />
					</ProjectProvider>
				</Route>
				<PrivateRoute path="/dashboard">
					<ProjectsProvider>
						<Dashboard />
					</ProjectsProvider>
				</PrivateRoute>
				<Route path="/email/:id">
					<ConfirmEmail />
				</Route>
				<Redirect to="/login" />
			</Switch>
		</BrowserRouter>
	);
};

const PrivateRoute = ({ children, ...rest }) => {
	const currentUser = useContext(UserContext);
	return <Route {...rest} render={() => (currentUser ? children : <Redirect to="/login" />)} />;
};

export default App;
