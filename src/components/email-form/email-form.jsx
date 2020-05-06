import React, { useState } from 'react';

import CustomInput from '../input/input';

import './email-form.styles.scss';

const EmailForm = () => {
	const [ email, setEmail ] = useState('');

	return (
		<section className="email-container">
			<h1 className="heading">Odoslať E-mail</h1>
			<div className="email-template">
				<p>Predmet: CheckVid.io - Vaše video je pripravené na kontrolu</p>

				<p>Dobrý deň,</p>

				<p>Vaše video od {'{Meno produkcie}'} je pre Vás pripravené.</p>
				<p>
					Na nižšie uvedenom odkaze si môžete skontrolovať video. Ak k nemu máte nejaké pripomienky, napíšte
					ich prosím do poznámok.
				</p>
				<p>
					Panel s poznámkami sa nachádza na pravej strane od videa. Poznámky môžete písať s uvedeným časom,
					kde presne sa vo videu nachádza chyba, alebo môžete písať poznámky všeobecné, bez uvedenia času. Ak
					si celé video skontrolujete a napíšte poznámky, stlačte prosím tlačidlo „Odoslať poznámky“. Po
					stlačení sa tvorcovi zašle správa, že ste video videli.
				</p>
				<p>{'{url}'}</p>
				<p>Ďakujeme.</p>
				<p>S pozdravom,</p>
				<p>tím CheckVid.io</p>
			</div>
			<div className="email-form component">
				<CustomInput
					id="Email"
					label="E-mail klienta:"
					name={email}
					type="email"
					placeholder="client@email.com"
					value={email}
					handleChange={(e) => setEmail(e.target.value)}
				/>
				<button className="custom-btn">Odoslať</button>
			</div>
		</section>
	);
};

export default EmailForm;
