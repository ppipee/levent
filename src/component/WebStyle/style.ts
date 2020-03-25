import styled from 'styled-components'
import { CenterAbsolute, CenterFlex, SoftShadow, HardShadow, ButtonLevent, SUB_COLOR, MAIN_COLOR } from 'common/style'

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
	margin: 12px 0 24px;
`

export const TabHighLight = styled.div`
	height: 6px;
	width: 56px;
	display: flex;
	margin: 0 auto 48px;
	justify-content: center;
	border-radius: 3px;
	transition: all 1s;
	background: ${({ select }: { select?: boolean }) =>
		select ? 'linear-gradient(90deg, #FA709A 0%, #FEE140 100%)' : 'white'};
`

export const CardWrapper = styled.div`
	${CenterFlex()}
	width:208px;
	height: 256px;
	pointer-events: none;
	border-radius: 10.4px;
	font-size: 20px;
	text-transform: capitalize;
	font-weight: bold;
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
		select
			? 'linear-gradient(0.25deg, #FA709A 0.18%, #FEE140 99.82%)'
			: 'linear-gradient(109.44deg, #FFFFFF 100%)'};
	${SoftShadow}
	transition: all 0.3s;
	&:hover {
		${HardShadow}
		top:-6px;
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

// Select Template

export const SelectWrapper = styled(CardsWrapper)`
	width: 100%;
	${CenterFlex('column')}
`
export const TemplatesContainer = styled.div`
	max-height: 332px;
	height: 100%;
	margin-top: 16px;
	padding: 8px;
	display: grid;
	grid-gap: 12px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	overflow: auto;
	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: ${SUB_COLOR};
		border-radius: 50px;
		&:hover {
			background: ${MAIN_COLOR};
		}
	}
`
export const TemplateCard = styled.div`
	position: relative;
	height: 136px;
	width: 112px;
	border-radius: 4px;
	background: linear-gradient(109.44deg, #fa709a 0%, #fee140 100%);
	margin-bottom: 10px;
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		${SoftShadow}
		top:-5px;
		left: 2px;
	}
`
export const TemplateCardWrapper = styled.div`
	position: relative;
	${CenterFlex('column')}
`
export const TemplateTitle = styled.div`
	line-height: 14px;
	font-size: 14px;
	max-width: 100px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	text-transform: capitalize;
	text-align: center;
`
