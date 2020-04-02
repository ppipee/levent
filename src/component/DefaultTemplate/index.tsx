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
		{ start: '07:00', end: '08:00', detail: 'register' },
		{ start: '08:00', end: '09:00', detail: 'register' },
		{ start: '09:00', end: '10:00', detail: 'register' },
	],
	social: {
		instagram: 'www.facebook.com',
		facebook: 'www.facebook.com',
		twitter: 'www.twitter.com',
		youtube: 'www.youtube.com',
	},
	contact: '0123456789',
	email: 'eieiei@hotmail.com',
	dateTime: {
		startDate: '2020-03-03',
		startTime: '07:00',
		endTime: '18:00',
	},
	location: {
		place: 'Kasetsart University',
		province: 'Bangkok',
		county: 'Chatuchak',
		district: 'Lat Yao',
		postCode: '10900',
	},
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
			<TimeSchedule schedule={EventInfo.schedule} />
			<Info
				contact={EventInfo.contact}
				email={EventInfo.email}
				dateTime={EventInfo.dateTime}
				location={EventInfo.location}
			/>
			<SocialFollow social={EventInfo.social} />
			<Registration onClick={handleClick} />
		</div>
	)
}
export default DefaultTemplate
