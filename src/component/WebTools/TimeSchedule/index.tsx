import React from 'react'
import { WebToolsWrapper, WebToolsTitle } from 'common/toolsStyle'

interface PropTypes {
	schedule: {
		time: string
		detail: string
	}[]
	end?: boolean
}

const TimeSchedule = ({ schedule, end = false }: PropTypes) => {
	return (
		<WebToolsWrapper>
			<WebToolsTitle>TimeSchedule</WebToolsTitle>
			<div></div>
		</WebToolsWrapper>
	)
}
export default TimeSchedule
