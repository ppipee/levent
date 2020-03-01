export interface EventTypes {
	name: string
	date: string
	time?: string
	place: { name: string; province?: string }
	ticket?: string
	color?: string
}

export interface IWebTools {
	[key: string]: boolean
	schedule: boolean
	registration: boolean
	map: boolean
	route: boolean
	gallery: boolean
	ticket: boolean
	sponser: boolean
	socialFollow: boolean
}
