import twoDigiFormat from 'common/twoDigiFormat'

export const DATE_TIME_FORMAT = {
	date: 'DATE',
	time: 'TIME',
}

const newDate = (format?: string) => {
	const date = new Date()
	if (format === DATE_TIME_FORMAT.date) {
		const _date = date.getDate()
		const _month = date.getMonth() + 1
		const _year = date.getFullYear()
		return [_year, twoDigiFormat(_month), twoDigiFormat(_date)].join('-')
	} else if (format === DATE_TIME_FORMAT.time) {
		const _minutes = date.getMinutes()
		const _hours = date.getHours()
		return [twoDigiFormat(_hours), twoDigiFormat(_minutes)].join(':')
	}
	return date
}
export default newDate
