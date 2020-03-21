import React from 'react'
import DetailBoard from 'component/DetailBoard'

const Report = () => {
	return (
		<>
			<DetailBoard>
				<div>View</div>
				<div>1,200,000</div>
			</DetailBoard>
			<DetailBoard>
				<div>Favourites</div>
				<div>560,000</div>
			</DetailBoard>
			<DetailBoard>
				<div>Participant</div>
				<div>100,000</div>
			</DetailBoard>
		</>
	)
}
export default Report
