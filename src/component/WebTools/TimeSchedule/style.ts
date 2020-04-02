import styled from 'styled-components'
import { SUB_COLOR, MAIN_COLOR, SpaceBetweenFlex, InputNoneStyle } from 'common/style'

export const DotCircle = styled.div`
	position: relative;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: ${MAIN_COLOR};
	&::after {
		content: '';
		position: absolute;
		border-radius: 50%;
		width: 12px;
		height: 12px;
		top: 4.2px;
		left: 4.4px;
		background: white;
	}
`
export const ScheduleWrapper = styled.div`
	position: relative;
	width: 560px;
`
export const LineVertical = styled.div`
	margin-left: 8px;
	position: absolute;
	height: 100%;
	width: 8px;
	border-radius: 8px;
	left: 6.4px;
	background: ${MAIN_COLOR};
`
export const Period = styled.div`
	${SpaceBetweenFlex()}
	/* display: flex; */
	align-items: flex-start;
	margin: 8px 8px;
	/* white-space: pre; */
`
export const Time = styled.div`
	font-size: 14px;
	line-height: 14px;
	/* margin: 3px 16px; */

	/* text-align: center; */
`
export const PeriodInfo = styled.div`
	width: 400px;
	/* flex-grow: 1; */
	textarea {
		width: inherit;
		padding: 0px 0 0;
		line-height: 16px;
		font-size: 16px;
		resize: none;
		${InputNoneStyle}
	}
`
