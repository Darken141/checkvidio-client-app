import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import LogInForm from '../../components/log-in-form/log-in-form';

import './sign-in.styles.scss';

const SignIn = () => {
	return (
		<div id="sign-in">
			<Navbar>
				<Link className="nav__item-link" to="/sign-up">
					Registrovať
				</Link>
			</Navbar>

			<LogInForm />
		</div>
	);
};

export default SignIn;
