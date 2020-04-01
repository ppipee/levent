import React, { MouseEvent } from 'react'
import { ButtonRegister, ButtonWrapper } from './style'
import { WebToolsWrapper } from 'common/toolsStyle'

const Registration = ({ onClick }: { onClick: (e: MouseEvent<HTMLDivElement>) => void }) => {
	return (
		<WebToolsWrapper>
			<ButtonWrapper>
				<ButtonRegister onClick={onClick}>Register</ButtonRegister>
			</ButtonWrapper>
		</WebToolsWrapper>
	)
}
export default Registration
