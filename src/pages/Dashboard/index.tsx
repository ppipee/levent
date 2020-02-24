import React from 'react'
import { PageTitle } from 'component'
import EventBoard from 'component/EventBoard'

const Dashboard = () => {
	return (
		<div>
			<PageTitle title="Dashboard" />
			<EventBoard name="join" showall="/dashboard/join">
				<div>Card</div>
			</EventBoard>
			<EventBoard name="favourite" showall="/dashboard/favourite">
				<div>Card</div>
			</EventBoard>
			<EventBoard name="organize" showall="/dashboard/organize">
				<div>Card</div>
			</EventBoard>
		</div>
	)
}
export default Dashboard
