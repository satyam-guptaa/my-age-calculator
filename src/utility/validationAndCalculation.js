const validateAndCalculate = (dob) => {
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
		errorObj.month = 'Must be a valid month';
	}
	if (dobYear > yearNow) {
		errorObj.year = 'Must be in past';
	}

	let resultAge = {};
	if (Object.keys(errorObj).length === 0) {
		resultAge = ageCalculation(dobDay, dobMonth, dobYear, now, yearNow);
	}

	return { errorObj, resultAge };
};

const ageCalculation = (dobDay, dobMonth, dobYear, now, yearNow) => {
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
	return age;
};

export default validateAndCalculate;
