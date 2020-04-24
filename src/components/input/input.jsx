import React from 'react';

import './input.styles.scss';

const CustomInput = (props) => {
	const { label, name, type, placeholder, value, handleChange, id } = props;
	return (
		<div className="custom-input">
			<label className="custom-input__label" htmlFor={id}>
				{label}
			</label>
			<input
				className="custom-input__input"
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required
			/>
		</div>
	);
};

export default CustomInput;
