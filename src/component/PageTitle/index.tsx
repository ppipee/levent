import React, { ReactNode } from 'react'
import { TitleWrapper, Line } from './style'

const PageTitle = ({ children }: { children: ReactNode }) => (
	<TitleWrapper>
		<div>{children}</div>
		<Line />
	</TitleWrapper>
)
export default PageTitle
