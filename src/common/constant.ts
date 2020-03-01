import { IWebTools } from './type'

export const DEFAULT_INFO = {
	name: '',
	startDate: '',
	startTime: '',
	endDate: '',
	endTime: '',
	location: {
		place: '',
		province: '',
		district: '',
		postCode: '',
	},
	shortTeaser: '',
}

export const DEFAULT_WEB_TOOLS: IWebTools = {
	schedule: false,
	registration: false,
	map: false,
	route: false,
	gallery: false,
	ticket: false,
	sponser: false,
	socialFollow: false,
}

export const DEFAULT_SERVICES = {
	page: 'single',
	registration: false,
	ticket: ['free'],
}
