import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../context/Auth';
import { ProjectsContext } from '../../../../context/Projects';
import { FaEdit } from 'react-icons/fa';
import PopUp from '../../../../components/pop-up/pop-up';
import CustomInput from '../../../../components/input/input';

import './user-profile.styles.scss';

const UserProfile = () => {
	const [ productionName, setProductionName ] = useState('');
	const currentUser = useContext(UserContext);
	const { production, updateProductionName, toggleProductionPopUp, showProductionPopUp } = useContext(
		ProjectsContext
	);

	return (
		<section id="user-profile">
			<div className="heading__container">
				<h1 className="heading">User Profile</h1>
			</div>
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

					<div className="edit-icon icon" onClick={toggleProductionPopUp}>
						<FaEdit />
					</div>
				</div>
			</div>

			{showProductionPopUp && (
				<PopUp>
					<CustomInput
						id="production-name"
						label="Meno produkcie:"
						name={productionName}
						type="text"
						placeholder="EpiQ studio"
						value={productionName}
						handleChange={(e) => setProductionName(e.target.value)}
					/>
					<button onClick={() => updateProductionName(productionName)} className="custom-btn">
						Zmeniť
					</button>
				</PopUp>
			)}
		</section>
	);
};

export default UserProfile;
