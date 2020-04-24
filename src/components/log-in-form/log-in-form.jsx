import React, { useState } from 'react';

import CustomInput from '../input/input';

import './log-in-form.styles.scss';

const LogInForm = () => {
	const [ email, setEmail ] = useState('');
	const [ pwd, setPwd ] = useState('');

	return (
		<form className="form">
			<h3>Prihlásiť sa</h3>
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
				placeholder="* * * * *"
				value={pwd}
				handleChange={(e) => setPwd(e.target.value)}
			/>
			<button className="custom-btn" type="submit">
				Prihlásiť
			</button>
		</form>
	);
};

export default LogInForm;
