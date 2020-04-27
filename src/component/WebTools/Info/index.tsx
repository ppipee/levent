import React, { useCallback } from 'react'
import { TextareaAutosize } from '@material-ui/core'
import { isEmpty } from 'lodash'

import { WebToolsWrapper, WebToolsInput } from 'common/toolsStyle'
import { DAYS, MONTHS } from 'common/date'
import { IDateTime, ILocation, locationType } from 'common/propTypes/info'

import { DateTitle, RowWrapper, TimeInput, LocationTextArea } from './style'
import { PinIcon, PhoneIcon, EmailIcon, TimeIcon } from 'asset/icon/tools'

interface PropTypes {
	contact?: string
	email?: string
	location: ILocation
	dateTime?: IDateTime
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
	const locationFormat = useCallback(() => {
		return Object.keys(location).reduce((text: string, key: string) => {
			if (isEmpty(location[key as locationType])) return text
			const detail = location[key as locationType]
			if (key === 'street') return text + detail + 'Road'
			return text + detail
		}, '')
	}, [location])

	return (
		<WebToolsWrapper>
			<DateTitle value={rePresentDate()} />
			<div>
				{!isEmpty(dateTime) && (
					<RowWrapper>
						<TimeIcon />
						<TimeInput value={dateTime?.startTime} />
						{!isEmpty(dateTime?.endTime) && (
							<>
								{' - '}
								<TimeInput value={dateTime?.endTime} />
							</>
						)}
					</RowWrapper>
				)}
				{!isEmpty(locationFormat()) && (
					<RowWrapper>
						<PinIcon />
						<LocationTextArea>
							<TextareaAutosize value={locationFormat()} />
						</LocationTextArea>
					</RowWrapper>
				)}
				{!isEmpty(email) && (
					<RowWrapper>
						<EmailIcon />
						<WebToolsInput value={email} />
					</RowWrapper>
				)}
				{!isEmpty(contact) && (
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
