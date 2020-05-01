import EventInfoAction from '../../eventinfo'

export const setDateTime = (type: string, date?: string, time?: string) => {
	let date_time = {}

	if (type === 'start') {
		date_time = date ? { ...date_time, startDate: date } : date_time
		date_time = time ? { ...date_time, startTime: time } : date_time
	} else if (type === 'end') {
		date_time = date ? { ...date_time, endDate: date } : date_time
		date_time = time ? { ...date_time, endTime: time } : date_time
	}

	return {
		type: EventInfoAction.dateTime,
		dateTime: date_time,
	}
}
