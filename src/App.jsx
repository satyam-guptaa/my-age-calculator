import { useState } from 'react';
import './App.scss';

function App() {
	return (
		<article>
			<div className='calc-wrapper'>
				<div className='calc-input-container'>
					<div className='date-inputs'>
						<label htmlFor='day'>Day</label>
						<input type='text' id='day' className='input-field' />
					</div>
					<div className='date-inputs'>
						<label htmlFor='month'>Month</label>
						<input type='text' id='month' className='input-field' />
					</div>
					<div className='date-inputs'>
						<label htmlFor='year'>Year</label>
						<input type='text' id='year' className='input-field' />
					</div>
				</div>
				<div className='calc-mid-container'>
					<div className='horizontal-line'>
						<button className='submit-btn' type='submit'>
							<img src='/icon-arrow.svg' alt='down arrow' />
						</button>
					</div>
				</div>
			</div>
		</article>
	);
}

export default App;
