import React, { ReactNode } from 'react'
import { BoardWrapper, BoardTitle, BoardContainner, NoEvent } from './style'
import { Link } from 'react-router-dom'

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
				{showall !== undefined && <Link to={showall}>Show all</Link>}
			</BoardTitle>
			<BoardContainner>
				{get_event && children}
				{!get_event && <NoEvent>No Event</NoEvent>}
			</BoardContainner>
		</BoardWrapper>
	)
}
export default EventBoard
