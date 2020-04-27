import React, { ChangeEvent, MouseEvent, Dispatch } from 'react'

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
import useRedux from 'common/useRedux'
import { StoreState, ActionState } from 'stores'
import { EventInfoAction as Action } from 'action'

const EventInfo = {
	eventName: 'TredXKesatsert',
	about: 'TED is the event as Kasetsart University',
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
		street: 'Ngamvongvan',
		province: 'Bangkok',
		county: 'Chatuchak',
		district: 'Lat Yao',
		postCode: '10900',
	},
}

const DefaultTemplate = () => {
	const [state, dispatch] = useRedux() as [StoreState, ActionState]
	const info = state.eventInfo

	const { schedule, socialFollow, gallery, map, route, registration, sponser, ticket } = state.webTools.statusTools
	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const setInfo = dispatch.eventInfo
		const value = e.target.value
		const type = e.target.getAttribute('data-key')
		if (type === 'name' || type === 'shortTeaser') {
			setInfo({ type: Action.info, info: { [type]: value } })
		}
	}
	const handleClick = (e: MouseEvent<HTMLDivElement>) => {
		console.log('click')
	}
	console.log(state.webTools)
	return (
		<div>
			<EventName value={info.eventName} onChange={handleChange} />
			<About value={info.shortTeaser} onChange={handleChange} />
			{schedule && <TimeSchedule schedule={EventInfo.schedule} />}
			<Info
				contact={EventInfo.contact}
				email={EventInfo.email}
				dateTime={info.dateTime}
				location={info.location}
			/>
			{socialFollow && <SocialFollow social={EventInfo.social} />}
			{gallery && <Gallery />}
			{registration && <Registration onClick={handleClick} />}
		</div>
	)
}
export default DefaultTemplate
