import React from 'react';

import './navbar.styles.scss';

const Navbar = ({ children }) => {
	return (
		<header className="navbar">
			<div className="navbar__logo">
				<h1>
					<a href="/" className="logo">
						CheckVid.io
					</a>
				</h1>
			</div>

			<nav className="navbar__nav">
				<ul className="nav">
					<li className="nav__item">{children}</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
