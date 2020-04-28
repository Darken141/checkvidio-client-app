import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import './confirm-email.styles.scss';

const ACTIVATE = gql`
	query Activate($id: ID) {
		activate(id: $id) {
			msg
		}
	}
`;

const ConfirmEmail = () => {
	const { id } = useParams();
	const data = useQuery(ACTIVATE, { variables: { id } });

	return (
		<div id="confirm-email">
			<h1>Účet bol aktivovaný</h1>
			<Link to="/login">Preisť na aplikaciu</Link>
		</div>
	);
};

export default ConfirmEmail;
