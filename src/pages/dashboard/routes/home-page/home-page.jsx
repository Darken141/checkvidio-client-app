import React, { useContext } from 'react';
import { UserContext } from '../../../../context/Auth';
import { Link, useRouteMatch } from 'react-router-dom';
import {
	AiOutlineUser,
	AiOutlineUnorderedList,
	AiOutlineFolderAdd,
	AiOutlineLogout,
	AiOutlineWarning
} from 'react-icons/ai';
import { auth } from '../../../../firebase/firebase.utils';

import './home-page.styles.scss';

const HomePage = () => {
	const { displayName } = useContext(UserContext);
	const match = useRouteMatch();

	return (
		<section id="home-page">
			<div className="welcome-container">
				<div className="greetings">
					<h2 className="sub-heading">Ahoj</h2>
					<h1 className="heading">{displayName}</h1>
				</div>
			</div>

			<h2 className="heading label-heading">Navigácia</h2>
			<div className="home-page__header">
				<Link to={`${match.url}/create-project`} className="card-button">
					<div className="profile-icon">
						<AiOutlineFolderAdd />
					</div>
					<h2>Pridať</h2>
				</Link>
				<Link to={`${match.url}/projects`} className="card-button">
					<div className="projects-icon">
						<AiOutlineUnorderedList />
					</div>
					<h2>Projekty</h2>
				</Link>
				<Link to={`${match.url}/profile`} className="card-button">
					<div className="profile-icon">
						<AiOutlineUser />
					</div>
					<h2>Profil</h2>
				</Link>
				<a href="https://checkvid.io/contact" target="_blank" rel="noopener noreferrer" className="card-button">
					<div className="log-out-icon">
						<AiOutlineWarning />
					</div>
					<h2>Nahlásiť chybu</h2>
				</a>
				<a href="/login" onClick={() => auth.signOut()} className="card-button">
					<div className="log-out-icon">
						<AiOutlineLogout />
					</div>
					<h2>Odhlásiť sa</h2>
				</a>
			</div>
		</section>
	);
};

export default HomePage;
