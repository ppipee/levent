import React, { ReactNode } from 'react'
import { BoardWrapper, Title, Line, Content } from './style'

const DetailBoard = ({ children }: { children: ReactNode }) => {
	const node = children as object & { [key: string]: any }
	return (
		<BoardWrapper>
			<Title>{node[0]}</Title>
			<Line />
			<Content>{node.slice(1, node.length)}</Content>
		</BoardWrapper>
	)
}
export default DetailBoard
