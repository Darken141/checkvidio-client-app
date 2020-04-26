import React from 'react';

import { useLazyQuery, useApolloClient } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Redirect } from 'react-router-dom';

import LogInForm from './log-in-form';
import Spinner from '../spinner/spinner.component';

const LOGIN_USER = gql`
	query Login($email: String, $pwd: String) {
		login(email: $email, pwd: $pwd) {
			token
		}
	}
`;

const LogInFormContainer = () => {
	const [ login, { data, loading, error } ] = useLazyQuery(LOGIN_USER);
	const client = useApolloClient();

	if (loading) return <Spinner />;
	if (error) {
		console.log(error);

		return (
			<div className="success-sign-up">
				<h2>Zle prihlasovacie udaje</h2>
				<p>skuste znova...</p>
			</div>
		);
	}
	if (data) {
		const { login: { token } } = data;
		client.writeData({ data: { user: token } });

		return (
			<div className="success-sign-up">
				<h2>Úspešne prihlasený</h2>
				<p>O chvíľu budete presmerovaný</p>
				<Redirect to="/dashboard" />
			</div>
		);
	}

	return <LogInForm handleLogin={login} />;
};

export default LogInFormContainer;
