import styled from 'styled-components'
import { CenterFlex, SoftShadow, WHITE, SUB_COLOR, MAIN_COLOR } from 'common/style'

export const Add = styled.div`
	position: relative;
	top: -8px;
	width: 112px;
	padding: 12px;
	${CenterFlex()};
	svg {
		pointer-events: none;
		margin-right: 8px;
	}
	color: ${WHITE};
	border-radius: 2px;
	background: ${SUB_COLOR};
	transition: ease-in 0.2s;
	${SoftShadow}
	&:hover {
		cursor: pointer;
		background: ${MAIN_COLOR};
	}
`
