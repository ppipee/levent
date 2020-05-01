import WebToolsAction from 'action/webtools'
import { ISchedulePeriod, ISchedule } from 'common/propTypes/tools'

const setSchedule = (title: string, schedule: ISchedulePeriod[], index = 0, schedules: ISchedule[]) => {
	const new_schedules = [...schedules]
	new_schedules[index] = {
		title,
		schedule,
	}
	return {
		type: WebToolsAction.schedule,
		schedules: new_schedules,
	}
}

export default setSchedule
