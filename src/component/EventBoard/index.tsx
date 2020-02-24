import React, { ReactNode, Children } from 'react'
import { BoardWrapper, BoardTitle, BoardContainner } from './style'
import { Link } from 'react-router-dom'

interface EventProps {
	name: string
	children: ReactNode
	showall?: string
}

const EventBoard = ({ name, children, showall }: EventProps) => {
	return (
		<BoardWrapper>
			<BoardTitle>
				<div>{`${name} Event`}</div>
				{showall !== undefined && <Link to={showall}>Show all</Link>}
			</BoardTitle>
			<BoardContainner>{children}</BoardContainner>
		</BoardWrapper>
	)
}
export default EventBoard
