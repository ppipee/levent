import React, { ChangeEvent, MouseEvent } from 'react'
import {
	About,
	EventName,
	Gallery,
	Info,
	Map,
	Routes,
	Registration,
	SocialFollow,
	Sponser,
	Ticket,
	TimeSchedule,
} from 'component/WebTools'

const EventInfo = {
	eventName: 'TedXKasetsart',
	about:
		'TED is the evenTED is the evenTED is the evenTED is the evenTED is the evenTED is the evenTED is the evenTED is the evenTED is the evenTED is the event',
	schedule: [
		{ time: '07:00', detail: 'register' },
		{ time: '08:00', detail: 'register' },
		{ time: '09:00', detail: 'register' },
	],
}

const DefaultTemplate = () => {
	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const value = e.target.value
		const type = e.target.getAttribute('data-key')
	}
	const handleClick = (e: MouseEvent<HTMLDivElement>) => {
		console.log('click')
	}
	return (
		<div>
			<EventName value={EventInfo.eventName} onChange={handleChange} />
			<About value={EventInfo.about} onChange={handleChange} />
			<TimeSchedule schedule={EventInfo.schedule} end />
			<Registration onClick={handleClick} />
		</div>
	)
}
export default DefaultTemplate
