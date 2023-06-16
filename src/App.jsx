import { useState } from 'react';
import './App.scss';
import { DateInput } from './component/DateInput';
import { ResultData } from './component/ResultData';
import validateAndCalculate from './utility/validationAndCalculation';

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

	const handleSubmit = () => {
		const { errorObj, resultAge } = validateAndCalculate(dob);
		setError(errorObj);
		setResult(resultAge);
	};

	return (
		<article className='calc-container'>
			<div className='calc-wrapper'>
				<div className='calc-input-container'>
					<DateInput
						error={error.day}
						handleDateChange={handleDateChange}
						value={dob.day}
						type='day'
						placeholder='DD'
					/>
					<DateInput
						error={error.month}
						handleDateChange={handleDateChange}
						value={dob.month}
						type='month'
						placeholder='MM'
					/>
					<DateInput
						error={error.year}
						handleDateChange={handleDateChange}
						value={dob.year}
						type='year'
						placeholder='YYYY'
					/>
				</div>
				<div className='calc-mid-container'>
					<div className='horizontal-line'>
						<button className='submit-btn' onClick={handleSubmit}>
							<img src='/icon-arrow.svg' alt='down arrow' />
						</button>
					</div>
				</div>
				<div className='calc-result-container'>
					{result?.bday ? (
						<>
							<p className='result-data age-number'>Welcome</p>
							<p className='result-data'>to the</p>
							<p className='result-data'>World!!</p>
						</>
					) : (
						<>
							<ResultData result={result.year} type='years' />
							<ResultData result={result.month} type='months' />
							<ResultData result={result.day} type='days' />
						</>
					)}
				</div>
			</div>
		</article>
	);
}

export default App;
