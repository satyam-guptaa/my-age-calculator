import { useState } from 'react';
import './App.scss';

function App() {
	return (
		<article className='calc-container'>
			<div className='calc-wrapper'>
				<div className='calc-input-container'>
					<div className='date-inputs'>
						<label htmlFor='day'>Day</label>
						<input
							type='text'
							id='day'
							className='input-field'
							placeholder='DD'
						/>
					</div>
					<div className='date-inputs'>
						<label htmlFor='month'>Month</label>
						<input
							type='text'
							id='month'
							className='input-field'
							placeholder='MM'
						/>
					</div>
					<div className='date-inputs'>
						<label htmlFor='year'>Year</label>
						<input
							type='text'
							id='year'
							className='input-field'
							placeholder='YYYY'
						/>
					</div>
				</div>
				<div className='calc-mid-container'>
					<div className='horizontal-line'>
						<button className='submit-btn' type='submit'>
							<img src='/icon-arrow.svg' alt='down arrow' />
						</button>
					</div>
				</div>
				<div className='calc-result-container'>
					<p className='result-data'>
						<i>
							<span className='age-number'>--</span> years
						</i>
					</p>
					<p className='result-data'>
						<i>
							<span className='age-number'>--</span> months
						</i>
					</p>
					<p className='result-data'>
						<i>
							<span className='age-number'>--</span> days
						</i>
					</p>
				</div>
			</div>
		</article>
	);
}

export default App;
