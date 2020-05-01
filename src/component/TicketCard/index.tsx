import React from 'react'
import { TicketWrapper, TicketContainner, TicketLink, TicketBackground, Title, Detail, Icon } from './style'
import CalendarIcon from 'asset/icon/calendar.svg'
import PinIcon from 'asset/icon/pin.svg'
import ArrowIcon from 'asset/icon/arrow.svg'
import { EventTypes } from 'common/type'

const TicketCard = ({ name, date, time, location, color = 'gray' }: EventTypes) => {
	return (
		<TicketWrapper>
			<TicketBackground color={color}>
				<TicketContainner>
					<Title>{name}</Title>
					<Detail>
						<Icon>
							<img src={CalendarIcon} alt="calendar-icon" />
						</Icon>
						<div>{`${date}  ${time}`}</div>
					</Detail>
					<Detail>
						<Icon>
							<img src={PinIcon} alt="pin-icon" />
						</Icon>
						<div>
							<div>{location.address}</div>
							<div>{location.province}</div>
						</div>
					</Detail>
				</TicketContainner>
			</TicketBackground>
			<TicketLink color={color}>
				<img src={ArrowIcon} alt="arrow-icon" />
			</TicketLink>
		</TicketWrapper>
	)
}
export default TicketCard
