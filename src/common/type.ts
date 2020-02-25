export interface EventTypes {
	name: string
	date: string
	time?: string
	place: { name: string; province?: string }
	ticket?: string
}
