import { useState } from 'react';
import './App.scss';

function App() {
	const [dob, setDob] = useState({ day: '', month: '', year: '' });
	const [error, setError] = useState({ day: '', month: '', year: '' });
	const [result, setResult] = useState({});

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

	const validation = () => {
		const errorObj = {};
		const dobDay = dob.day;
		const dobMonth = dob.month;
		const dobYear = dob.year;
		const now = new Date();
		const yearNow = now.getFullYear();

		if (!dobMonth || !dobDay || !dobYear) {
			if (!dobDay) errorObj.day = 'This field is Required';
			if (!dobMonth) errorObj.month = 'This field is Required';
			if (!dobYear) errorObj.year = 'This field is Required';
		}
		if (dobDay > 31) {
			errorObj.day = 'Must be a valid day';
		}
		if (dobMonth > 12) {
			errorObj.day = 'Must be a valid month';
		}
		if (dobYear > yearNow) {
			errorObj.year = 'Must be in past';
		}
		setError(errorObj);

		if (Object.keys(errorObj).length === 0) {
			handleSubmit(dobDay, dobMonth, dobYear, now, yearNow);
		}
	};

	const handleSubmit = (dobDay, dobMonth, dobYear, now, yearNow) => {
		const age = {};
		//since month starts with 0 in Date
		const monthNow = now.getMonth() + 1;
		const dayNow = now.getDate();
		//age year
		age.year = yearNow - dobYear;
		//age month
		if (monthNow >= dobMonth) {
			age.month = monthNow - dobMonth;
		} else {
			age.year--;
			age.month = 12 + monthNow - dobMonth;
		}
		//age day
		if (dayNow >= dobDay) {
			age.day = dayNow - dobDay;
		} else {
			age.month--;
			age.day = 31 + dayNow - dobDay;
			if (age.month < 0) {
				age.year--;
				age.month = 11;
			}
		}
		setResult(age);
	};

	return (
		<article className='calc-container'>
			<div className='calc-wrapper'>
				<div className='calc-input-container'>
					<div className='date-inputs'>
						<label
							htmlFor='day'
							className={error.day ? 'onerror-label' : ''}
						>
							Day
						</label>
						<input
							value={dob.day}
							type='number'
							id='day'
							className={error.day ? 'onerror-input' : ''}
							placeholder='DD'
							onChange={(e) => handleDateChange(e, 'day')}
						/>
						<p
							className={`error-field
								${!error.day ? 'no-error-field' : ''}`}
						>
							<i>{error.day}</i>
						</p>
					</div>
					<div className='date-inputs'>
						<label
							htmlFor='month'
							className={error.month ? 'onerror-label' : ''}
						>
							Month
						</label>
						<input
							value={dob.month}
							type='number'
							id='month'
							className={error.month ? 'onerror-input' : ''}
							placeholder='MM'
							onChange={(e) => handleDateChange(e, 'month')}
						/>
						<p
							className={`error-field
								${!error.month ? 'no-error-field' : ''}`}
						>
							<i>{error.month}</i>
						</p>
					</div>
					<div className='date-inputs'>
						<label
							htmlFor='year'
							className={error.year ? 'onerror-label' : ''}
						>
							Year
						</label>
						<input
							value={dob.year}
							type='number'
							id='year'
							className={error.year ? 'onerror-input' : ''}
							placeholder='YYYY'
							onChange={(e) => handleDateChange(e, 'year')}
						/>
						<p
							className={`error-field
								${!error.year ? 'no-error-field' : ''}`}
						>
							<i>{error.year}</i>
						</p>
					</div>
				</div>
				<div className='calc-mid-container'>
					<div className='horizontal-line'>
						<button className='submit-btn' onClick={validation}>
							<img src='/icon-arrow.svg' alt='down arrow' />
						</button>
					</div>
				</div>
				<div className='calc-result-container'>
					<p className='result-data'>
						<i>
							<span className='age-number'>
								{result.year ? result.year : '--'}
							</span>{' '}
							years
						</i>
					</p>
					<p className='result-data'>
						<i>
							<span className='age-number'>
								{result.month ? result.month : '--'}
							</span>{' '}
							months
						</i>
					</p>
					<p className='result-data'>
						<i>
							<span className='age-number'>
								{result.day ? result.day : '--'}
							</span>{' '}
							days
						</i>
					</p>
				</div>
			</div>
		</article>
	);
}

export default App;
