import React from 'react';
import { Link } from 'react-router-dom';

import './confirm-email.styles.scss';

const ConfirmEmail = () => {
	return (
		<div id="confirm-email">
			<h1>Účet bol aktivovaný</h1>
			<Link to="/login">Preisť na aplikaciu</Link>
		</div>
	);
};

export default ConfirmEmail;
