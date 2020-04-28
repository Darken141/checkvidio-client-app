import React, { useState } from 'react';

import CustomInput from '../input/input';
import { FaTimes } from 'react-icons/fa';

import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Spinner from '../spinner/spinner.component';

import './email-form.styles.scss';

const INVITE = gql`
	query Invite($email: String, $projectId: String) {
		invite(email: $email, projectId: $projectId) {
			msg
		}
	}
`;

const EmailForm = ({ setToggleEmailForm, projectId }) => {
	const [ email, setEmail ] = useState('');
	const [ sendInvite, { data, loading, error } ] = useLazyQuery(INVITE);

	const handleSendInvite = () => {
		sendInvite({ variables: { email, projectId } });
		setEmail('');
		setToggleEmailForm(false);
		alert('Email bol odoslaný');
	};

	if (loading) return <Spinner />;

	return (
		<div className="email-form">
			<div className="close-icon" onClick={() => setToggleEmailForm(false)}>
				<FaTimes />
			</div>
			<h2>Odoslať E-mail</h2>
			<p>Informujte vašeho klienta že jeho video je pripravené na kontrolu vložením e-mailu</p>
			<CustomInput
				id="Email"
				label="E-mail klienta:"
				name={email}
				type="email"
				placeholder="client@email.com"
				value={email}
				handleChange={(e) => setEmail(e.target.value)}
			/>
			<button className="custom-btn" onClick={handleSendInvite}>
				Odoslať
			</button>
		</div>
	);
};

export default EmailForm;
