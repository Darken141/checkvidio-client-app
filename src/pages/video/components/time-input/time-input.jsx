import React from 'react';

import './time-input.styles.scss';

const TimeInput = (data) => {
	const { name, type, min, sec, placeholder, handleMinChange, handleSecChange } = data;
	return (
		<div className="custom-time-input">
			<input
				className="custom-time-input__input"
				id={name}
				type={type}
				name={name}
				value={min}
				// placeholder={placeholder}
				onChange={handleMinChange}
			/>
			<label className="custom-time-input__label" htmlFor={name}>
				min
			</label>
			<span> :</span>
			<input
				className="custom-time-input__input"
				id={name}
				type={type}
				name={name}
				value={sec}
				// placeholder={placeholder}
				onChange={handleSecChange}
				required
			/>
			<label className="custom-time-input__label" htmlFor={name}>
				sec
			</label>
		</div>
	);
};

export default TimeInput;
