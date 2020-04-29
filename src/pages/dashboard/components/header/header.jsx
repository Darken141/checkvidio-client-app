import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { FaBars, FaUserCircle, FaPlus } from 'react-icons/fa';

import './header.styles.scss';

const GET_ASIDE_HIDDEN = gql`
	{
		asideHidden @client
	}
`;

const Header = () => {
	const client = useApolloClient();
	const { data: { asideHidden } } = useQuery(GET_ASIDE_HIDDEN);

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

				<div className="menu-icon" onClick={() => client.writeData({ data: { asideHidden: !asideHidden } })}>
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
					<li
						onClick={() => {
							localStorage.removeItem('token');
							client.writeData({ data: { user: null } });
						}}
					>
						Odhlásiť sa
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
