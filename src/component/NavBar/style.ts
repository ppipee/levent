import styled from 'styled-components'
import { FontColor, SpaceBetweenFlex } from 'common/style'

export const Title = styled.div`
	font-size: 20px;
	line-height: 20px;
	text-align: center;
	${FontColor('white')}
`

export const SubTitle = styled(Title)`
	font-size: 18px;
	line-height: 18px;
`
export const Bar = styled.div`
	${SpaceBetweenFlex()}
	align-items:center;
	position: fixed;
	z-index: 10;
	top: 0;
	height: 56px;
	width: 100%;
	box-sizing: border-box;
	padding: 0 20px;
	background: linear-gradient(116.36deg, #fa709a 2.55%, #fcaa6c 56.55%, #fee140 110.55%);
`

export const Button = styled.div`
	${SpaceBetweenFlex()}
	box-sizing: border-box;
	height: 45px;
	padding: 5px 10px;
	/* margin: 8px 2.5px; */
	cursor: pointer;
	&:hover {
		border-radius: 5px;
		background: rgba(247, 247, 247, 0.2);
	}
`
export const SvgCustom = styled.svg`
	margin-left: 4px;
	width: 35px;
	height: 35px;
`
export const EmptyBox = styled.div`
	width: 100%;
	height: 56px;
`
