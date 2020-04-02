import React from 'react'
import { WebToolsWrapper, WebToolsTitle } from 'common/toolsStyle'
import { Period, DotCircle, Time, PeriodInfo, LineVertical, ScheduleWrapper } from './style'
import { TextareaAutosize } from '@material-ui/core'
interface PropTypes {
	schedule: {
		start: string
		end: string
		detail: string
	}[]
}

const TimeSchedule = ({ schedule }: PropTypes) => {
	return (
		<WebToolsWrapper>
			<WebToolsTitle>TimeSchedule</WebToolsTitle>
			<ScheduleWrapper>
				<LineVertical />
				{schedule.map(({ start, end, detail }, index) => (
					<Period key={start}>
						<DotCircle />
						<Time>{`${start} - ${end}`}</Time>
						<PeriodInfo>
							<TextareaAutosize index-key={index} value={detail} />
						</PeriodInfo>
					</Period>
				))}
			</ScheduleWrapper>
		</WebToolsWrapper>
	)
}
export default TimeSchedule
