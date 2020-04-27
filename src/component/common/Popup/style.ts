import styled from 'styled-components'
import { CenterAbsolute } from 'common/style'

export const CardPopup = styled.div`
	${CenterAbsolute}
	position:fixed;
	&:focus {
		outline: none;
	}
`
