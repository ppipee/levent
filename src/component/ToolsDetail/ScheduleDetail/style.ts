import styled from 'styled-components'
import { WHITE, SpaceBetweenFlex, InputNoneStyle, CenterFlex } from 'common/style'

export const TimeRangeContainer = styled.div`
	${SpaceBetweenFlex()}
	width:240px;
	margin-right: 56px;
`
export const TitleTimeRange = styled(TimeRangeContainer)`
	justify-content: center;
`
export const TextAreaInfo = styled.div`
	width: 400px;
	text-align: center;
	textarea {
		color: ${WHITE};
		width: inherit;
		padding: 6px 2px;
		line-height: 16px;
		font-size: 16px;
		resize: none;
		${InputNoneStyle}
		&:focus {
			color: black;
			background: ${WHITE};
		}
	}
`
export const Title = styled.div`
	margin-bottom: 8px;
	line-height: 16px;
	width: 100%;
	text-align: center;
`
export const TimeWrapper = styled.div`
	width: 108px;
	text-align: center !important;
	&:hover {
		border: none !important;
	}
	.MuiInput-underline {
		&:before,
		&:after {
			border: none;
		}
	}
	.MuiInputBase-input.MuiInput-input {
		color: ${WHITE};
	}
`
export const RowContainer = styled.div`
	display: flex;
	align-items: center;
	white-space: pre-wrap;
	margin: 4px 0;
`
export const ScheduleContainer = styled.div`
	padding: 12px 16px;
	display: inline-flex;
	flex-direction: column;
`
export const AddRowButton = styled.div`
	padding: 6px 12px;
	color: ${WHITE};
	text-transform: uppercase;
	border-radius: 2px;
	background: rgba(247, 247, 247, 0.2);
	display: inline-flex;
	align-items: center;
	margin: 4px auto;
	cursor: pointer;
	transition: ease-in 0.2s;
	&:hover {
		background: rgba(247, 247, 247, 0.1);
	}
	svg {
		margin-right: 8px;
	}
`
