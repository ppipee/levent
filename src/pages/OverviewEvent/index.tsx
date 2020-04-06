import React from 'react'
import { PageTitle, Traffic, PageManagement, Ticket, Report } from 'component'
import { ContainerWrapper, Main, SubContent } from './style'

const OverviewEvent = () => {
	return (
		<div>
			<PageTitle>Overview</PageTitle>
			<ContainerWrapper>
				<Main>
					<PageManagement />
					<Traffic />
				</Main>
				<SubContent>
					<Report />
					<Ticket />
				</SubContent>
			</ContainerWrapper>
		</div>
	)
}
export default OverviewEvent
