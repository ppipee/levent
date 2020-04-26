import { IWebTools, IServices, IWebEdit } from './type'

export const DEFAULT_INFO = {
	name: '',
	start: {
		date: '', //YYYY-MM-DD
		time: '00:00', //HH:mm
	},
	end: {
		date: '',
		time: '00:00',
	},
	location: {
		place: '',
		street: '',
		province: '',
		county: '',
		district: '',
		postCode: '',
	},
	shortTeaser: '',
	webName: '',
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

export const DEFAULT_WEB_EDIT: IWebEdit = {
	build: true, //default is false
	selectedTool: 'cursor',
}

export const WIDTH_TOOL_CONFIG = '240px'
export const HEIGHT_NAV_BAR = '56px'
