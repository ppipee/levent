import styled from 'styled-components'
import { WIDTH_TOOL_CONFIG } from 'common/constant'
export const ContainerResponse = styled.div`
	/* width: 100%; */
`

export const EmptyBox = styled.div`
	width: ${WIDTH_TOOL_CONFIG};
	height: calc(100vh - 56px);
`

export const ContainerWrapper = styled.div`
	display: flex;
	background: white;
`
export const WebContainer = styled.div`
	position: relative;
	max-width: 1024px;
	min-width: 375px;
	box-sizing: border-box;
	padding: 24px 16px;
	margin: 0 auto;
`
