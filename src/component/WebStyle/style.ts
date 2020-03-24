import styled from 'styled-components'
import { CenterAbsolute, CenterFlex, SoftShadow, HardShadow, ButtonLevent } from 'common/style'

export const Background = styled.div`
	position: absolute;
	background: white;
	width: calc(100vw - 240px);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	min-width: 520px;
`

export const SelectStyleWrapper = styled.div`
	min-width: 520px;
	${CenterAbsolute}
	top:45%;
`
export const Title = styled.div`
	text-transform: uppercase;
	text-align: center;
	font-size: 22px;
	margin-bottom: 24px;
	font-weight: medium;
`
export const CardsWrapper = styled.div`
	${CenterFlex()}
	flex-wrap:wrap;
	justify-content: space-between;
	margin: 12px 0 24px;
`

export const TabHighLight = styled.div`
	height: 6px;
	width: 56px;
	display: flex;
	margin: 0 auto 48px;
	justify-content: center;
	border-radius: 3px;
	background: ${({ select }: { select?: boolean }) =>
		select ? 'linear-gradient(90deg, #FA709A 0%, #FEE140 100%)' : 'white'};
`

export const CardWrapper = styled.div`
	padding: 56px 36px;
	pointer-events: none;
	border-radius: 10.4px;
	font-size: 20px;
	text-transform: capitalize;
	font-weight: bold;
	/* padding: ${({ select }: { select?: boolean }) => (select ? '56px 36px' : '56px 24px')}; */
	img {
		display: flex;
		margin: auto auto 24px;
	}
	background: white;
`
export const BackgroundCard = styled.div`
	margin: 16px;
	padding: 5px;
	position: relative;
	border-radius: 12px;
	transition: background 1s;
	background: ${({ select }: { select?: boolean }) =>
		select ? 'linear-gradient(0.25deg, #FA709A 0.18%, #FEE140 99.82%)' : 'white'};
	${SoftShadow}
	&:hover {
		${HardShadow}
		top:-3px;
		left: -2px;
	}
`

export const ButtonContainer = styled.div`
	${CenterFlex()}
`

export const Button = styled.div`
	${ButtonLevent}
	width:144px;
`
