import styled from 'styled-components'
import { CenterFlex } from 'common/style'

export const TitleWrapper = styled.div`
	width: 100%;
	font-size: 1.4rem;
	margin-bottom: 20px;
	${CenterFlex()}
`
export const Line = styled.div`
	flex-grow: 1;
	margin-left: 16px;
	height: 5px;
	border-radius: 50px;
	background: linear-gradient(90deg, #fa709a 0%, #fee140 100%);
`
