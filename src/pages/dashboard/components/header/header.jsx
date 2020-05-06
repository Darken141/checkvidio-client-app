import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { FaBars, FaUserCircle, FaPlus } from 'react-icons/fa';

import './header.styles.scss';

const Header = () => {
	const [ dropdownHidden, setDropdownHidden ] = useState(true);

	return (
		<header id="dashboard__header">
			<div className="logo-container">
				<h1>
					<Link to="/" className="logo">
						CheckVid.io
					</Link>
				</h1>
			</div>

			<nav className="menu-icons">
				<div className="plus-icon">
					<Link to="/dashboard/create-project">
						<span>Pridat</span>
						<FaPlus />
					</Link>
				</div>

				<div className="menu-icon">
					<FaBars />
				</div>

				<div className="user-menu-icon" onClick={() => setDropdownHidden(!dropdownHidden)}>
					<FaUserCircle />
				</div>
			</nav>

			<div className={dropdownHidden ? 'user-dropdown component' : 'user-dropdown component active'}>
				<ul>
					<li>
						<Link to="/dashboard/profile">Profil</Link>
					</li>
					<li>Odhlásiť sa</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
