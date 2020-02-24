import React from 'react'
import EventBoard from 'component/EventBoard'
import { PageTitle } from 'component'

const FavouriteEvent = () => {
	return (
		<div>
			<PageTitle title="Favourite Event" />
			<EventBoard name="favourite">card</EventBoard>
		</div>
	)
}
export default FavouriteEvent
