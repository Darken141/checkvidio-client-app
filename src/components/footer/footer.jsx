import React from 'react';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import './footer.styles.scss';

const Footer = () => {
	return (
		<footer id="footer">
			<div className="row">
				<div className="col">
					&copy;{' '}
					<a href="https://www.coderkin.com" target="_blank" rel="noopener noreferrer">
						CODERKIN
					</a>
				</div>
				<div className="col icons">
					<a href="https://www.facebook.com/CheckVidio-102042618125958" className="facebook-icon">
						<FaFacebookSquare />
					</a>
					<a href="https://www.instagram.com/checkvid.io/" className="instagram-icon">
						<FaInstagram />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
