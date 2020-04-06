import { ChangeEvent } from 'react'

export interface IInputTypes {
	value: string | number
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	readOnly?: boolean
}

export interface EventTypes {
	name: string
	date: string
	time?: string
	place: { name: string; province?: string }
	ticket?: string
	color?: string
}
export interface IEventInfo {
	name: string
	startDate: string
	startTime: string
	endDate?: string
	endTime?: string
	location: {
		place: string
		province: string
		district: string
		postCode: string
	}
	shortTeaser: string
	webName: string
}

export interface IWebTools {
	schedule: boolean
	registration: boolean
	map: boolean
	route: boolean
	gallery: boolean
	ticket: boolean
	sponser: boolean
	socialFollow: boolean
}
export interface IServices {
	page: {
		single: boolean
		multi: boolean
	}
	registration: boolean
	ticket: {
		free: boolean
		pay: boolean
	}
}
export type ToolsType =
	| 'cursor'
	| 'text'
	| 'button'
	| 'image'
	| 'video'
	| 'schdule'
	| 'gallery'
	| 'map'
	| 'route'
	| 'registration'
	| 'social'
	| 'sponser'
	| 'ticket'
export interface IWebEdit {
	build: boolean
	selectedTool: ToolsType
}
