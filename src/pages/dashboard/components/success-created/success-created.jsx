import React from 'react';

import { Link } from 'react-router-dom';

import './success-created.styles.scss';

const SuccessCreated = ({ data: { addProject: { _id } } }) => {
	return (
		<div className="success-created">
			<h1 className="heading">Projekt bol úspesne vytvorený</h1>
			<div className="component">
				<h2 className="sub-heading">Co dalej?</h2>
				<Link to={`/dashboard/project/${_id}/send-email`}>Odoslať klientovy</Link>
				<p>alebo</p>
				<Link to={`/video/${_id}`}>Prezrieť projekt</Link>
			</div>
		</div>
	);
};

export default SuccessCreated;
