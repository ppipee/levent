import React from 'react'
import { PageTitle, EventBoard, TicketCard } from 'component'
import { EventTypes } from 'common/type'
import CreateCard from 'component/CreateCard'
import Stepper from 'component/Stepper'

const TICKET = [
	{
		name: 'TedXKasetsart',
		date: '01 Dec 2019',
		time: '08.00 - 16.00',
		place: { name: 'สำนักพิพิธภัณฑ์และวัฒนธรรมการเกษตร', province: 'กรุงเทพฯ' },
		color: 'levent',
	},
	{
		name: 'TedXKasetsart',
		date: '01 Dec 2019',
		time: '08.00 - 16.00',
		place: { name: 'สำนักพิพิธภัณฑ์และวัฒนธรรมการเกษตร', province: 'กรุงเทพฯ' },
		// color: 'levent',
	},
]
const Dashboard = () => {
	return (
		<div>
			<PageTitle title="Dashboard" />
			<EventBoard name="join" showall="/dashboard/join">
				{TICKET.map(({ name, date, time, place, color = 'gray' }: EventTypes) => {
					console.log(color)
					return <TicketCard name={name} date={date} place={place} time={time} color={color} />
				})}
			</EventBoard>
			<EventBoard name="favourite" showall="/dashboard/favourite"></EventBoard>
			<EventBoard name="organize" showall="/dashboard/organize">
				<CreateCard />
			</EventBoard>
			<Stepper />
		</div>
	)
}
export default Dashboard
