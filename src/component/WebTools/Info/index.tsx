import React from 'react'
import { PinIcon, PhoneIcon, EmailIcon, TimeIcon } from 'asset/icon/tools'
import { WebToolsWrapper, WebToolsInput } from 'common/toolsStyle'
import { DateTitle, RowWrapper, TimeInput, LocationTextArea } from './style'
import { TextareaAutosize } from '@material-ui/core'
import { DAYS, MONTHS } from 'common/date'
interface PropTypes {
	contact?: string
	email?: string
	location?: {
		place?: string
		street?: string
		province?: string
		county?: string
		district?: string
		postCode?: string
	}
	dateTime?: {
		startDate?: string
		startTime?: string
		endDate?: string
		endTime?: string
	}
}

const Info = ({ contact, email, location, dateTime }: PropTypes) => {
	const rePresentDate = () => {
		const _start = new Date(dateTime?.startDate as string)
		const day = DAYS[_start.getDay()]
		const date = _start.getDate()
		const month = MONTHS[_start.getMonth()]
		const year = _start.getFullYear()
		if (dateTime?.endDate) {
			const _end = new Date(dateTime?.endDate as string)
			const e_date = _end.getDate()
			const e_month = MONTHS[_end.getMonth()]
			const e_year = _end.getFullYear()
			if (year !== e_year) return `${day} ${date} ${month} ,${year} - ${e_date} ${e_month} ,${e_year}`
			else if (month !== e_month) return `${day} ${date} ${month} - ${e_date} ${e_month} ,${year}`
			else if (date !== e_date) return `${day} ${date} - ${e_date} ${month} ,${year}`
		}
		return `${day} ${date} ${month} ,${year}`
	}
	return (
		<WebToolsWrapper>
			<DateTitle value={rePresentDate()} />
			<div>
				{dateTime && (
					<RowWrapper>
						<TimeIcon />
						<TimeInput value={dateTime?.startTime} />
						{' - '}
						<TimeInput value={dateTime?.endTime} />
					</RowWrapper>
				)}
				{location && (
					<RowWrapper>
						<PinIcon />
						<LocationTextArea>
							<TextareaAutosize value={Object.values(location).join(' ')} />
						</LocationTextArea>
					</RowWrapper>
				)}
				{email && (
					<RowWrapper>
						<EmailIcon />
						<WebToolsInput value={email} />
					</RowWrapper>
				)}
				{contact && (
					<RowWrapper>
						<PhoneIcon />
						<WebToolsInput value={contact} />
					</RowWrapper>
				)}
			</div>
		</WebToolsWrapper>
	)
}
export default Info
