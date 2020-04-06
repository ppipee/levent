import styled from 'styled-components'
import { BLACK } from 'common/style'
import { WIDTH_TOOL_CONFIG } from 'common/constant'

export const PositionWrapper = styled.div`
	position: fixed;
	top: 56px;
	right: 0;
`
export const ToolConfigWrapper = styled.div`
	height: calc(100vh - 56px);
	width: ${WIDTH_TOOL_CONFIG};
	box-sizing: border-box;
	border: 1px solid ${BLACK};
`
export const ToolInfo = styled.div`
	height: 400px;
	width: inherit;
	border: 1px solid ${BLACK};
`
export const ToolName = styled.div`
	width: inherit;
	text-align: center;
	font-size: 18px;
	font-weight: medium;
	text-transform: capitalize;
`
