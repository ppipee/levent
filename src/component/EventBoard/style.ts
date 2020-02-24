import styled from 'styled-components'
import { FontColor, SpaceBetweenFlex, WHITE } from 'common/style'

export const BoardWrapper = styled.div`
	width: inherit;
	box-sizing: border-box;
	padding: 16px 32px 24px;
	background: rgba(64, 64, 64, 0.95);
	${FontColor('white')}
	margin-bottom:16px;
`
export const BoardTitle = styled.div`
	text-transform: capitalize;
	box-sizing: border-box;
	padding: 4px 4px 10px;
	width: 100%;
	border-bottom: 1px solid ${WHITE};
	${SpaceBetweenFlex()};
`
export const BoardContainner = styled.div`
	display: flex;
	flex-wrap: wrap;
	box-sizing: border-box;
	padding: 8px 0;
`
