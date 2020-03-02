import styled from 'styled-components'
import { CenterFlex, WHITE_GRAY, WHITE } from 'common/style'

export const ButtonWrapper = styled.div`
	font-size: 0.875rem;
	color: ${WHITE};
	pointer-events: auto;
	${CenterFlex()}
	&:hover {
		color: ${WHITE_GRAY};
		cursor: pointer;
	}
`
