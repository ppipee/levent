import React, { ReactNode } from 'react'
import { BoardWrapper, BoardTitle, BoardContainner, NoEvent } from './style'
import { Link } from 'react-router-dom'
import ButtonDetail from 'component/ButtonDetail'

interface EventProps {
	name: string
	children?: ReactNode
	showall?: string
}

const EventBoard = ({ name, children, showall }: EventProps) => {
	const get_event = children !== undefined
	return (
		<BoardWrapper>
			<BoardTitle>
				<div>{`${name} Event`}</div>
				{showall !== undefined && (
					<ButtonDetail>
						<Link to={showall}>Show all</Link>
					</ButtonDetail>
				)}
			</BoardTitle>
			<BoardContainner>
				{get_event && children}
				{!get_event && <NoEvent>No Event</NoEvent>}
			</BoardContainner>
		</BoardWrapper>
	)
}
export default EventBoard
