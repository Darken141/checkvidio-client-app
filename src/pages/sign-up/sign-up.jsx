import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/Auth';
import { Link, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import CustomInput from '../../components/input/input';
import Spinner from '../../components/spinner/spinner.component';

import './sign-up.styles.scss';

const SignUp = () => {
	const [ email, setEmail ] = useState('');
	const [ pwd, setPwd ] = useState('');
	const [ displayName, setDisplayName ] = useState('');

	const [ loading, setLoading ] = useState(false);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		if (pwd.length < 8) return;
		if (email === '' || pwd === '' || displayName === '') return;
		try {
			setLoading(true);
			const { user } = await auth.createUserWithEmailAndPassword(email, pwd);
			await createUserProfileDocument(user, { displayName });

			setDisplayName('');
			setEmail('');
			setPwd('');
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	const currentUser = useContext(UserContext);

	if (currentUser) return <Redirect to="/dashboard" />;
	if (loading) return <Spinner />;

	return (
		<div id="sign-up">
			<h1 className="logo">CheckVid.io</h1>
			<form className="form component" onSubmit={(e) => handleFormSubmit(e)}>
				<h3>
					Registruj sa, je to <strong>ZDARMA!</strong>
				</h3>
				<CustomInput
					id="display-name"
					label="Vaše meno:"
					name={displayName}
					type="text"
					placeholder="Meno priezvisko"
					value={displayName}
					handleChange={(e) => setDisplayName(e.target.value)}
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
				<button className="sign-up__btn" type="submit">
					Vytvoriť účet
				</button>

				<Link className="link" to="/login">
					Mám účet, chcem sa prihlásiť.
				</Link>
			</form>
		</div>
	);
};

export default SignUp;
