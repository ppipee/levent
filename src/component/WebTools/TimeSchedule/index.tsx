import React from 'react'
import { WebToolsWrapper, WebToolsTitle } from 'common/toolsStyle'
import { Period, DotCircle, Time, PeriodInfo, LineVertical, ScheduleWrapper } from './style'
import { TextareaAutosize } from '@material-ui/core'
interface PropTypes {
	schedule: {
		title: string
		schedule: {
			start: string
			end: string
			detail: string
		}[]
	}
	index?: number
}

const TimeSchedule = ({ schedule, index = 0 }: PropTypes) => {
	return (
		<WebToolsWrapper>
			<WebToolsTitle>{schedule.title || 'TimeSchedule'}</WebToolsTitle>
			<ScheduleWrapper>
				<LineVertical />
				{schedule.schedule.map(({ start, end, detail }, index) => (
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
