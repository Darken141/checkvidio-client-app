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

				<div className="news">
					<h2 className="heading">Novinky</h2>
					<div className="new">
						<div className="new__heading">
							<h3 className="sub-heading">Vitajte na CheckVid.io</h3>
							<p className="new__heading--time">26. máj 2020</p>
						</div>
						<p>
							Práve sa nachádzame predbežnom prístupe našej platformy pre kameramanov a freelancerov. Naša
							platforma vám umožní efektívne zberať feedback od vašich klientov.
						</p>
						<ul>
							<li>
								<Link to={`${match.url}/create-project`}>Vytvárajte</Link> video projekty
							</li>
							<li>
								<Link to={`${match.url}/projects`}>Posielajte</Link> emaily klientom
							</li>
							<li>
								Zberajte feedback a podeľte sa s nami o jeden tiež a{' '}
								<a href="https://checkvid.io/contact" target="_blank" rel="noopener noreferrer">
									Napište nám
								</a>
							</li>
						</ul>
					</div>
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
