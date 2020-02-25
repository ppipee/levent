import React from 'react'
import EventBoard from 'component/EventBoard'
import { PageTitle } from 'component'
import { JoinWrapper } from './style'

const JoinEvent = () => {
	return (
		<JoinWrapper>
			<PageTitle title="Join Event" />
			<EventBoard name="join">card</EventBoard>
		</JoinWrapper>
	)
}
export default JoinEvent
