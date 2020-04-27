import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/navbar';
import { default as SignUpForm } from '../../components/sign-up-form/sign-up-form.container';

import './sign-up.styles.scss';

const SignUp = () => {
	return (
		<div id="sign-up">
			<Navbar>
				<Link className="nav__item-link" to="/login">
					Prihlásiť sa
				</Link>
			</Navbar>

			<SignUpForm />
		</div>
	);
};

export default SignUp;
