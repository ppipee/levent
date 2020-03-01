import styled from 'styled-components'
import { CenterFlex } from 'common/style'

export const CardWrapper = styled.div`
	width: 184px;
	height: 256px;
	margin: 8px;
	${CenterFlex()}
`
export const CreateCardWrapper = styled.div`
	/* width: 96px;
	height: 96px; */
	width: 184px;
	height: 256px;
	border-radius: 10px;
	background: rgba(192, 192, 192, 0.7);
	${CenterFlex()}
	img {
		display: flex;
	}
	&:hover {
		cursor: pointer;
		background: rgba(192, 192, 192, 0.5);
	}
`
