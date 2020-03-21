import React from 'react'
import { PageTitle, Traffic, PageManagement, Ticket, Report } from 'component'
import { ContainnerWrapper, Main, SubContent } from './style'

const OverviewEvent = () => {
	return (
		<div>
			<PageTitle>Overview</PageTitle>
			<ContainnerWrapper>
				<Main>
					<PageManagement />
					<Traffic />
				</Main>
				<SubContent>
					<Report />
					<Ticket />
				</SubContent>
			</ContainnerWrapper>
		</div>
	)
}
export default OverviewEvent
