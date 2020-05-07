import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/Auth';
import Navbar from '../../components/navbar/navbar';
import CustomInput from '../../components/input/input';
import Spinner from '../../components/spinner/spinner.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
	const [ email, setEmail ] = useState('');
	const [ pwd, setPwd ] = useState('');

	const [ loading, setLoading ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			await auth.signInWithEmailAndPassword(email, pwd);
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
		<div id="sign-in">
			<Navbar>
				<Link className="nav__item-link" to="/sign-up">
					Registrovať
				</Link>
			</Navbar>

			<form className="form" onSubmit={(e) => handleSubmit(e)}>
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
					Prihlásiť sa
				</button>
				<p>alebo</p>
				<button className="custom-btn" onClick={signInWithGoogle}>
					Prihlásiť sa cez účet GOOGLE
				</button>
			</form>
		</div>
	);
};

export default SignIn;
