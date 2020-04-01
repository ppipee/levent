import styled from 'styled-components'
import { WHITE } from 'common/style'

export const BoardWrapper = styled.div`
	box-sizing: border-box;
	padding: 16px 24px;
	text-transform: capitalize;
	background: rgba(51, 51, 51, 0.95);
	color: ${WHITE};
	margin-bottom: 16px;
`
export const Title = styled.div`
	font-size: 20px;
	margin-bottom: 12px;
	width: 100%;
`

export const Line = styled.div`
	height: 1px;
	background: ${WHITE};
	width: 100%;
`
export const Content = styled.div`
	padding: 12px 8px 0;
	box-sizing: border-box;
`
