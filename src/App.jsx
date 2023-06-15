import { useState } from 'react';
import './App.scss';

function App() {
	const [dob, setDob] = useState({ day: '', month: '', year: '' });

	const handleDateChange = (e, type) => {
		switch (type) {
			case 'day':
				setDob((prevState) => {
					return { ...prevState, day: e.target.value };
				});
				break;
			case 'month':
				setDob((prevState) => {
					return { ...prevState, month: e.target.value };
				});
				break;
			case 'year':
				setDob((prevState) => {
					return { ...prevState, year: e.target.value };
				});
				break;
			default:
				break;
		}
	};
	return (
		<article className='calc-container'>
			<div className='calc-wrapper'>
				<div className='calc-input-container'>
					<div className='date-inputs'>
						<label htmlFor='day'>Day</label>
						<input
							value={dob.day}
							type='text'
							id='day'
							className='input-field'
							placeholder='DD'
							onChange={(e) => handleDateChange(e, 'day')}
						/>
					</div>
					<div className='date-inputs'>
						<label htmlFor='month'>Month</label>
						<input
							value={dob.month}
							type='text'
							id='month'
							className='input-field'
							placeholder='MM'
							onChange={(e) => handleDateChange(e, 'month')}
						/>
					</div>
					<div className='date-inputs'>
						<label htmlFor='year'>Year</label>
						<input
							value={dob.year}
							type='text'
							id='year'
							className='input-field'
							placeholder='YYYY'
							onChange={(e) => handleDateChange(e, 'year')}
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
