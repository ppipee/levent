import React from 'react'
import { TitleWrapper, Line } from './style'

const PageTitle = ({ title }: { title: string }) => (
	<TitleWrapper>
		<div>{title}</div>
		<Line />
	</TitleWrapper>
)
export default PageTitle
