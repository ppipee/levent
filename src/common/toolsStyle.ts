import styled, { css } from 'styled-components'
import { InputNoneStyle } from './style'

export const WebToolsWrapper = styled.div`
	padding: 16px 24px 24px;
	min-width: 327px;
	width: 100%;
	box-sizing: border-box;
`
export const WebToolsTitle = styled.div`
	font-size: 22px;
	line-height: 22px;
	margin-bottom: 12px;
	width: 100%;
`
export const WebToolsInput = styled.input`
	${InputNoneStyle}
	font-size:inherit;
	line-height: inherit;
	width: inherit;
`

export const WebToolsTextArea = styled.div`
	width: inherit;
	textarea {
		${InputNoneStyle}
		text-indent:32px;
		width: 100%;
		font-size: 16px;
		resize: none;
	}
`
export const WebToolsIndent = styled(WebToolsWrapper)`
	padding: 0 24px;
`
