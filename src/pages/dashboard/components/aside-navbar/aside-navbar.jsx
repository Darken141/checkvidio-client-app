import React from 'react';
import { Link } from 'react-router-dom';

import { FaTimes } from 'react-icons/fa';

import './aside-navbar.styles.scss';

const AsideNavBar = ({ projects, hideAside, asideHidden }) => {
	return (
		<aside id="dashboard__aside" className={asideHidden ? '' : 'active'}>
			<h2>
				<Link to="/">Projekty</Link>
			</h2>
			<ul className="aside-nav">
				{projects.map(({ _id, name }) => (
					<li key={_id} className="aside-nav__item">
						<Link to={`/dashboard/project/${_id}`}>{name}</Link>
					</li>
				))}

				{projects.length === 0 ? (
					<Link to="/dashboard/create-project" className="add-btn">
						Pridat projekt
					</Link>
				) : null}
			</ul>

			<div className="close-icon" onClick={hideAside}>
				<FaTimes />
			</div>
		</aside>
	);
};

export default AsideNavBar;
