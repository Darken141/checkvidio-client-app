import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/Auth';
import { Link, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import Navbar from '../../components/navbar/navbar';
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
			<Navbar>
				<Link className="nav__item-link" to="/login">
					Prihlásiť sa
				</Link>
			</Navbar>

			<form className="form" onSubmit={(e) => handleFormSubmit(e)}>
				<h3>
					Registruj sa, je to <strong>ZDARMA!</strong>
				</h3>
				<CustomInput
					id="production-name"
					label="Názov produkcie:"
					name={displayName}
					type="text"
					placeholder="EpiQ-Video studio"
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
				<button className="custom-btn" type="submit">
					Vytvoriť účet
				</button>
			</form>
		</div>
	);
};

export default SignUp;
