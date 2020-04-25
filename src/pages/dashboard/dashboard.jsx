import React, { useState } from 'react';

import { FaBars, FaUserCircle, FaTimes } from 'react-icons/fa';

import './dashboard.styles.scss';

const Dashboard = () => {
	const [ toggleAside, setToggleAside ] = useState(false);

	return (
		<div id="dashboard">
			<header id="dashboard__header">
				<div className="logo__container">
					<h1 className="logo">CheckVid.io</h1>
				</div>
				<div className="menu-items">
					<div className="menu-icon" onClick={() => setToggleAside(!toggleAside)}>
						<FaBars />
					</div>

					<div className="user-menu-icon">
						<FaUserCircle />
					</div>
				</div>
			</header>
			<aside id="dashboard__aside" className={toggleAside ? 'active' : ''}>
				ASIDE
				<div className="close-icon" onClick={() => setToggleAside(false)}>
					<FaTimes />
				</div>
			</aside>
			<main id="dashboard__main">
				<section id="projects">
					<h1>Projects</h1>
				</section>
			</main>
			<footer id="dashboard__footer">
				<div>CODERKIN</div>

				<div>SOCIAL MEDIA</div>
			</footer>
		</div>
	);
};

export default Dashboard;
