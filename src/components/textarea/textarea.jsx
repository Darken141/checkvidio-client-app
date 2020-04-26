import React from 'react';

import './textarea.styles.scss';

const CustomTextarea = (data) => {
	const { name, label, rows, value, placeholder, onChange, handlePressKey } = data;
	return (
		<div className="custom-textarea">
			<label className="custom-textarea__label" htmlFor={name}>
				{label}
			</label>
			<textarea
				className="custom-textarea__textarea"
				name={name}
				rows={rows}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				// onKeyPress={(e) => handlePressKey(e)}
				required
			/>
		</div>
	);
};

export default CustomTextarea;
