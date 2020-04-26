import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import SignUpForm from './sign-up-form';
import Spinner from '../spinner/spinner.component';

const ADD_USER = gql`
	mutation AddUser($email: String, $pwd: String, $productionName: String) {
		addUser(email: $email, pwd: $pwd, productionName: $productionName) {
			token
		}
	}
`;

const SignUpContainer = () => {
	const [ addUser, { data, loading, error } ] = useMutation(ADD_USER);

	if (loading) return <Spinner />;
	if (error) return <div>{error}</div>;
	if (data) {
		const { addUser: { token } } = data;
		localStorage.setItem('token', token);
		return (
			<div className="success-sign-up">
				<h2>Účet bol vytvorený</h2>
				<p>Na vas email bol zaslany potvrdzovaci kod pre aktivaciu uctu</p>
			</div>
		);
	}
	return <SignUpForm addUser={addUser} />;
};

export default SignUpContainer;
