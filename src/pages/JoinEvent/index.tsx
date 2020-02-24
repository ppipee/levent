import React from 'react'
import EventBoard from 'component/EventBoard'
import { PageTitle } from 'component'

const JoinEvent = () => {
	return (
		<div>
			<PageTitle title="Join Event" />
			<EventBoard name="join">card</EventBoard>
		</div>
	)
}
export default JoinEvent
