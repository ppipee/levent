import styled from 'styled-components'
import { CenterFlex, InputNoneStyle } from 'common/style'
import { WebToolsInput, WebToolsTextArea } from 'common/toolsStyle'

export const RowWrapper = styled.div`
	${CenterFlex()}
	justify-content:start;
	margin: 6px 0;
	line-height: 16px;
	white-space: pre;
	svg {
		width: 28px;
		height: 28px;
		margin-right: 8px;
	}
`
export const DateTitle = styled.input`
	font-size: 22px;
	${InputNoneStyle}
`
export const TimeInput = styled(WebToolsInput)`
	width: 48px;
	text-align: center;
`
export const LocationTextArea = styled(WebToolsTextArea)`
	width: 560px;
	textarea {
		text-indent: 0;
	}
`
