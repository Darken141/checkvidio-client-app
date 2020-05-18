import React, { useEffect, useRef, useContext } from 'react';
import { ProjectsContext } from '../../context/Projects';

import './pop-up.styles.scss';

const PopUp = ({ children }) => {
	const wrapperRef = useRef(null);
	const { toggleEmailPopUp } = useContext(ProjectsContext);

	const useOutsideAlerter = (ref) => {
		useEffect(
			() => {
				const handleClickOutside = (e) => {
					if (ref.current && !ref.current.contains(e.target)) {
						toggleEmailPopUp();
					}
				};

				document.addEventListener('click', handleClickOutside);
				return () => {
					// Unbind the event listener on clean up
					document.removeEventListener('click', handleClickOutside);
				};
			},
			[ ref ]
		);
	};

	useOutsideAlerter(wrapperRef);

	return (
		<div className="background">
			<div ref={wrapperRef} className="pop-up component">
				{children}
			</div>
		</div>
	);
};

export default PopUp;
