import { IWebStatusTools, IServices, IWebEdit } from './type'
import newDate, { DATE_TIME_FORMAT } from './newDate'
import { ISchedule } from './propTypes/tools'

export const DEFAULT_INFO = {
	eventName: '',
	dateTime: {
		startDate: newDate(DATE_TIME_FORMAT.date) as string, //YYYY-MM-DD
		startTime: '08:00', //HH:mm
		// endTime: '18:00',
	},
	location: {
		address: '',
		street: '',
		province: '',
		county: '',
		district: '',
		postCode: '',
	},
	shortTeaser: '',
	webName: '',
}

export type ToolsType =
	| 'schedule'
	| 'registration'
	| 'map'
	| 'route'
	| 'gallery'
	| 'ticket'
	| 'sponser'
	| 'socialFollow'

export const DEFAULT_WEB_TOOLS: IWebStatusTools = {
	schedule: false,
	registration: false,
	map: false,
	route: false,
	gallery: false,
	ticket: false,
	sponser: false,
	socialFollow: false,
}

interface PropTypes {
	[key: string]: any
}

export const DEFAULT_SERVICES: IServices & PropTypes = {
	page: {
		single: true,
		multi: false,
	},
	registration: false,
	ticket: {
		free: false,
		pay: false,
	},
}

export const DEFAULT_WEB_EDIT: IWebEdit = {
	build: false, //default is false
	selectedTool: 'cursor',
}

export const WIDTH_TOOL_CONFIG = '240px'
export const HEIGHT_NAV_BAR = '56px'

export const DEFAULT_SCHEDULE: ISchedule = {
	title: '',
	schedule: [],
}
