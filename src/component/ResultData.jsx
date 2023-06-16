import React from 'react';

export const ResultData = ({ result, type }) => {
	return (
		<div>
			<p className='result-data'>
				<i>
					<span className='age-number'>{result ? result : '--'}</span>{' '}
					{type}
				</i>
			</p>
		</div>
	);
};
