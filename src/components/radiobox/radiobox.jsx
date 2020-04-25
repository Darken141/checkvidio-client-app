import React from 'react';

import './radiobox.styles.scss';

const CustomRadiobox = (data) => {
	const { label, type, name, option, handleChange } = data;
	return (
		<div className={option === name ? 'custom-radiobox active' : 'custom-radiobox'}>
			<input
				className="custom-radiobox__radiobox"
				type={type}
				id={name}
				name={name}
				value={name}
				checked={option === name}
				onChange={handleChange}
			/>
			<label className="custom-radiobox__label" htmlFor={name}>
				{label}
			</label>
		</div>
	);
};

export default CustomRadiobox;
