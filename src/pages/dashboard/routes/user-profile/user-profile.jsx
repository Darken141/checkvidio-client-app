import React, { useContext } from 'react';
import { UserContext } from '../../../../context/Auth';
import { ProjectsContext } from '../../../../context/Projects';
import { FaEdit } from 'react-icons/fa';

import './user-profile.styles.scss';

const UserProfile = () => {
	const currentUser = useContext(UserContext);
	console.log(currentUser);
	const { production } = useContext(ProjectsContext);
	console.log(production);

	return (
		<section id="user-profile">
			<h1 className="heading">User Profile</h1>
			<div className=" card">
				<h2>Osobné informácie</h2>
				<div className="component">
					<p className="title">Meno</p>
					<p>{currentUser.displayName}</p>
				</div>
				<div className="component">
					<p className="title">E-mail</p>
					<p>{currentUser.email}</p>
				</div>
			</div>

			<div className="card">
				<h2>Produkcia</h2>
				<div className="component production">
					<p className="title">Meno produkcie:</p>
					<p>{production.productionName}</p>

					<div className="edit-icon icon">
						<FaEdit />
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserProfile;
