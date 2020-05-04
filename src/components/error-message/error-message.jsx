import React from 'react';

import './error-message.styles.scss';

const ErrorMessage = ({ error }) => {
	return (
		<div className="error-message">
			<h2 className="heading">Niekde nastala chyba</h2>
		</div>
	);
};

export default ErrorMessage;
