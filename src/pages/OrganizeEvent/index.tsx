import React from 'react'
import EventBoard from 'component/EventBoard'
import { PageTitle } from 'component'

const OrganizeEvent = () => {
	return (
		<div>
			<PageTitle>Organize Event</PageTitle>
			<EventBoard name="organize">card</EventBoard>
		</div>
	)
}
export default OrganizeEvent
