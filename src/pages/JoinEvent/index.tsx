import React from 'react'
import EventBoard from 'component/EventBoard'
import { PageTitle } from 'component'
import { JoinWrapper } from './style'

const JoinEvent = () => {
	return (
		<JoinWrapper>
			<PageTitle>Join Event</PageTitle>
			<EventBoard name="join">card</EventBoard>
		</JoinWrapper>
	)
}
export default JoinEvent
