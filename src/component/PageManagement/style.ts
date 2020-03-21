import styled from 'styled-components'
import { WHITE } from 'common/style'

export const ContentWrapper = styled.div`
	padding: 12px 8px 8px;
`
export const IconWrapper = styled.div`
	margin-left: 8px;
	width: 24px;
	height: 24px;
`
export const WebBlock = styled.input`
	width: 100%;
	line-height: 16px;
	padding: 8px;
	box-sizing: border-box;
	border-radius: 2px;
	border: 1px solid ${WHITE};
	color: ${WHITE};
	background: transparent;
	outline: none;
`
export const ContentBlock = styled.div`
	display: flex;
	align-items: center;
	text-transform: none;
	margin-bottom: 12px;
`
export const Title = styled.div`
	font-size: 18px;
	line-height: 18px;
	margin-bottom: 8px;
	text-transform: capitalize;
`

export const InfoTitle = styled.div`
	white-space: pre;
	margin-right: 8px;
`
export const InputField = styled.input`
	border-radius: 2px;
	outline: none;
	padding: 8px;
	line-height: 16px;
	width: 100%;
	background-color: ${WHITE};
`
export const InputAreaField = styled.textarea`
	border-radius: 2px;
	outline: none;
	padding: 8px;
	line-height: 16px;
	width: 100%;
	background-color: ${WHITE};
`
