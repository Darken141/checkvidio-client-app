import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import { default as LogInForm } from '../../components/log-in-form/log-in-form.container';

import './sign-in.styles.scss';

const SignIn = () => {
	return (
		<div id="sign-in">
			<Navbar>
				<Link className="nav__item-link" to="/sign-up">
					Sign up
				</Link>
			</Navbar>

			<LogInForm />
		</div>
	);
};

export default SignIn;
