import React from 'react';
import { Link } from 'react-router-dom';

import './aside-navbar.styles.scss';

const AsideNavBar = () => {
	return (
		<nav className="aside-navbar">
			<h2>Projects</h2>
			<ul className="aside-nav">
				<li className="aside-nav__item">
					<Link to="/">Project 1</Link>
				</li>
				<li className="aside-nav__item">
					<Link to="/">Project 2</Link>
				</li>
				<li className="aside-nav__item">
					<Link to="/">Project 3</Link>
				</li>
			</ul>
		</nav>
	);
};

export default AsideNavBar;
