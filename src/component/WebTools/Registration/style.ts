import styled from 'styled-components'
import { WHITE, SUB_COLOR, SoftShadow, HardShadow, CenterFlex, ButtonLevent } from 'common/style'

export const ButtonWrapper = styled.div`
	${CenterFlex()}
`

export const ButtonRegister = styled.div`
	display: inline-block;
	padding: 24px 52px;
	text-transform: uppercase;
	color: ${WHITE};
	border-radius: 50px;
	font-size: 18px;
	line-height: 18px;
	background: linear-gradient(#fa818c 100%, #fa818c 100%);
	${SoftShadow}
	width:auto;
	transition: all 0.2s;
	&:hover {
		cursor: pointer;
		background: linear-gradient(90deg, #fa709a 0%, #fee140 100%);
		${HardShadow}
	}
`
