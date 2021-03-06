import { IWebTools, IServices } from './type'

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

export const DEFAULT_WEB_TOOLS: IWebTools & { [key: string]: boolean } = {
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
