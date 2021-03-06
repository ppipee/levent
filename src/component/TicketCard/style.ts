import styled from 'styled-components'
import { CenterFlex, FontColor, SoftShadow, HardShadow } from 'common/style'
import { LeventGradient, BlueGradient, GreenGradient, GrayGradient } from 'common/bggradient'

const Gradient: { [key: string]: { head: string; tail: string } } = {
	levent: LeventGradient,
	gray: GrayGradient,
	blue: BlueGradient,
	green: GreenGradient,
}

export const TicketWrapper = styled.div`
	width: 256px;
	height: 88px;
	display: flex;
	${FontColor('black')}
	margin:8px;
	${SoftShadow}
	transition:all 0.2s;
	&:hover {
		cursor: pointer;
		position: relative;
		top: -2px;
		left: -2px;
		${HardShadow}
	}
`
export const TicketBackground = styled.div`
	width: 200px;
	height: 88px;
	position: relative;
	border-radius: 4px;
	${({ color }: { color: string }) => Gradient[color].head}
`
export const TicketContainner = styled.div`
	width: 188px;
	height: 76px;
	position: absolute;
	border-radius: 2px;
	margin: 6px;
	background-color: rgba(256, 256, 256, 0.8);
	padding: 6px 8px;
	box-sizing: border-box;
`
export const TicketLink = styled.div`
	width: 54px;
	height: inherit;
	border-left: 2px dashed rgba(256, 256, 256, 0.9);
	/* margin-left: 2px; */
	position: relative;
	border-radius: 4px;
	${({ color }: { color: string }) => Gradient[color].tail}
	${CenterFlex()}
	&::after {
		content: '';
		height: 30px;
		width: 30px;
		z-index: 1;
		background-color: #484848;
		position: absolute;
		top: 50%;
		right: 0;
		border-radius: 50%;
		transform: translate(50%, -50%);
	}
	img {
		margin-right: 8px;
	}
	&:hover {
		cursor: pointer;
	}
`
export const Title = styled.div`
	font-weight: medium;
	margin-bottom: 4px;
	line-height: 20px;
`

export const PlaceWrapper = styled.div`
	display: flex;
`
export const Detail = styled.div`
	display: flex;
	align-items: center;
	font-size: 11px;
	line-height: 11px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	margin-bottom: 4px;
`
export const Icon = styled.div`
	margin-right: 4px;
	img {
		display: flex;
	}
`
