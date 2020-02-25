import React from 'react'
import { PageTitle, EventBoard, TicketCard } from 'component'
import { EventTypes } from 'common/type'

const TICKET = [
	{
		name: 'TedXKasetsart',
		date: '01 Dec 2019',
		time: '08.00 - 16.00',
		place: { name: 'สำนักพิพิธภัณฑ์และวัฒนธรรมการเกษตร', province: 'กรุงเทพฯ' },
	},
	{
		name: 'TedXKasetsart',
		date: '01 Dec 2019',
		time: '08.00 - 16.00',
		place: { name: 'สำนักพิพิธภัณฑ์และวัฒนธรรมการเกษตร', province: 'กรุงเทพฯ' },
	},
]
const Dashboard = () => {
	return (
		<div>
			<PageTitle title="Dashboard" />
			<EventBoard name="join" showall="/dashboard/join">
				{TICKET.map(({ name, date, time, place }: EventTypes) => (
					<TicketCard name={name} date={date} place={place} time={time} />
				))}
			</EventBoard>
			<EventBoard name="favourite" showall="/dashboard/favourite"></EventBoard>
			<EventBoard name="organize" showall="/dashboard/organize"></EventBoard>
		</div>
	)
}
export default Dashboard
