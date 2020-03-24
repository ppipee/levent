import styled from 'styled-components'
import { CenterAbsolute, CenterFlex, SoftShadow, HardShadow, ButtonLevent } from 'common/style'

export const SelectStyleWrapper = styled.div`
	${CenterAbsolute}
	padding:40px 104px 32px;
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
	border-radius: 10.4px;
	font-size: 20px;
	text-transform: capitalize;
	font-weight: bold;
	padding: ${({ select }: { select?: boolean }) => (select ? '56px 36px' : '56px 24px')};
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
	background: ${({ select }: { select?: boolean }) =>
		select ? 'linear-gradient(0.25deg, #FA709A 0.18%, #FEE140 99.82%)' : 'white'};
	${SoftShadow}
	&:hover {
		${HardShadow}
		top:-3px;
		left: -3px;
	}
`

export const ButtonContainer = styled.div`
	${CenterFlex()}
`

export const Button = styled.div`
	${ButtonLevent}
	width:136px;
`
