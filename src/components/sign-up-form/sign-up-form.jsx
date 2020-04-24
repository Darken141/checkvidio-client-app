import React, { useState } from 'react';

import CustomInput from '../input/input';

import './sign-up-form.styles.scss';

const SignUpForm = ({ addUser }) => {
	const [ email, setEmail ] = useState('');
	const [ pwd, setPwd ] = useState('');
	const [ productionName, setProductionName ] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (pwd.length < 8) return;
		if (email === '' || pwd === '' || productionName === '') return;

		addUser({
			variables: {
				email,
				pwd,
				productionName
			}
		});
	};

	return (
		<form className="form" onSubmit={(e) => handleFormSubmit(e)}>
			<h3>
				Registruj sa, je to <strong>ZDARMA!</strong>
			</h3>
			<CustomInput
				id="production-name"
				label="Názov produkcie:"
				name={productionName}
				type="text"
				placeholder="EpiQ-Video studio"
				value={productionName}
				handleChange={(e) => setProductionName(e.target.value)}
			/>
			<CustomInput
				id="email"
				label="E-mail:"
				name={email}
				type="email"
				placeholder="example@email.com"
				value={email}
				handleChange={(e) => setEmail(e.target.value)}
			/>
			<CustomInput
				id="password"
				label="Heslo:"
				name={pwd}
				type="password"
				placeholder="min. 8 znakov"
				value={pwd}
				handleChange={(e) => setPwd(e.target.value)}
			/>
			<button className="custom-btn" type="submit">
				Vytvoriť účet
			</button>
		</form>
	);
};
export default SignUpForm;
