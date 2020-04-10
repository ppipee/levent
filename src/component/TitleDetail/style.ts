import styled from 'styled-components'
import { InputNoneStyle, WHITE, BLACK } from 'common/style'

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
`
export const Title = styled.input`
	${InputNoneStyle}
	font-size: 18px;
	margin-bottom: 8px;
	width: 360px;
	color: ${WHITE};
	padding: 4px 2px;
	border-radius: 2px;
	&:focus {
		color: ${BLACK};
		background: ${WHITE};
	}
`
