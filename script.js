function isLeap(year) {
	return new Date(year, 1, 29).getDate() === 29;
}

function daysInYear(year) {
	if(Number.isInteger(year)) return isLeap(year) ? 366 : 365;
	throw "exception";
}