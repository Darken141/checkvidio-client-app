import React, { useState } from 'react';

import AsideNavBar from './components/aside-navbar/aside-navbar';
import { FaBars, FaUserCircle, FaTimes, FaPlus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video/components/video-player/video-player';
import Overviewcard from './components/project-overview/overviewcard';

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
				<AsideNavBar />
				<div className="close-icon" onClick={() => setToggleAside(false)}>
					<FaTimes />
				</div>
			</aside>
			<main id="dashboard__main">
				<section id="projects">
					<div className="projects__header">
						<h1>Projects</h1>
						<div className="plus-icon">
							<Link to="/">
								<FaPlus />
							</Link>
						</div>
					</div>

					<Overviewcard />
					<Overviewcard />
					<Overviewcard />
					<Overviewcard />
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
