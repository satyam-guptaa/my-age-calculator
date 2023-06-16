import React from 'react';

export const DateInput = ({
	error,
	label,
	value,
	handleDateChange,
	type,
	placeholder,
}) => {
	return (
		<div className='date-inputs'>
			<label htmlFor='day' className={error ? 'onerror-label' : ''}>
				{type}
			</label>
			<input
				value={value}
				type='number'
				id='day'
				className={error ? 'onerror-input' : ''}
				placeholder={placeholder}
				onChange={(e) => handleDateChange(e, type)}
			/>
			<p
				className={`error-field
            ${!error ? 'no-error-field' : ''}`}
			>
				<i>{error}</i>
			</p>
		</div>
	);
};
