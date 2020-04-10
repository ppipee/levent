import React, { useState, ChangeEvent } from 'react'
import TitleDetail from 'component/TitleDetail'
import TimeSelect from './TimeSelect'
import {
	RowContainer,
	TimeWrapper,
	TimeRangeContainer,
	TextAreaInfo,
	TitleTimeRange,
	ScheduleContainer,
	AddRowButton,
} from './style'
import { TextareaAutosize } from '@material-ui/core'
import AddIcon from 'asset/icon/add'
import { ISchedule } from 'common/toolsType'

interface PropTypes {
	getSchedule: ISchedule
}

const ScheduleDetail = ({ getSchedule }: PropTypes) => {
	const [title, setTitle] = useState(getSchedule.title)
	const [schedule, setSchedule] = useState(getSchedule.schedule)
	const handleTitleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const value = e.target.value
		setTitle(value)
	}
	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const value = e.target.value
		// id = {'key index'}
		const [key, index] = e.target.getAttribute('id')?.split(' ') as string[]
		let new_schedule = [...schedule]
		new_schedule[+index][key] = value
		setSchedule(new_schedule)
	}
	const addRow = () => {
		const period = { start: '', end: '', detail: '' }
		setSchedule([...schedule, period])
	}
	return (
		<div>
			{title && <TitleDetail value={title} onChange={handleTitleChange} />}
			<ScheduleContainer>
				<RowContainer>
					<TitleTimeRange>Time Range</TitleTimeRange>
					<TextAreaInfo>Detail</TextAreaInfo>
				</RowContainer>
				{schedule.map(({ start, end, detail }, index) => (
					<RowContainer key={`${title}-${start}-${index}`}>
						<TimeRangeContainer>
							<TimeWrapper>
								<TimeSelect date={start} handleDateChange={handleChange} id={`start ${index}`} />
							</TimeWrapper>
							{` - `}
							<TimeWrapper>
								<TimeSelect date={end as string} handleDateChange={handleChange} id={`end ${index}`} />
							</TimeWrapper>
						</TimeRangeContainer>
						<TextAreaInfo>
							<TextareaAutosize value={detail} onChange={handleChange} id={`detail ${index}`} />
						</TextAreaInfo>
					</RowContainer>
				))}
				<RowContainer>
					<AddRowButton onClick={addRow}>
						<AddIcon size="11.5" />
						<div>ROW</div>
					</AddRowButton>
				</RowContainer>
			</ScheduleContainer>
		</div>
	)
}
export default ScheduleDetail
