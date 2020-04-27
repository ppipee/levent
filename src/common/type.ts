import { ChangeEvent } from 'react'
import { ILocation, IDateTime } from './propTypes/info'

export interface EventTypes {
	name: string
	date: string
	time?: string
	place: { name: string; province?: string }
	ticket?: string
	color?: string
}
export interface IEventInfo {
	eventName: string
	dateTime: IDateTime
	location: ILocation
	shortTeaser: string
	webName: string
}

export interface IWebStatusTools {
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
