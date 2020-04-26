import styled, { css } from 'styled-components'
import { WHITE, InputNoneStyle, BLACK } from 'common/style'

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
	padding: 4px 0 12px 0;
	text-transform: capitalize;
	text-decoration: underline;
`

export const InfoTitle = styled.div`
	white-space: pre;
	margin-right: 8px;
	${({ start }: { start?: boolean }) =>
		start
			? css`
					margin: 6px 8px 0 0;
					align-self: flex-start;
			  `
			: ''}
`
export const InputField = styled.input`
	border-radius: 2px;
	padding: 4px;
	line-height: 16px;
	font-size:16px;
	width: 100%;
	${InputNoneStyle}
	color: ${WHITE};
	border:1.5px inset transparent;
	&:focus {
		border:1.5px inset #c6c6c6;
		color: ${BLACK};
		background-color: ${WHITE};
	}
`
export const InputAreaField = styled.textarea`
	border-radius: 2px;
	padding: 8px;
	line-height: 16px;
	width: 100%;
	transition: ease-in all 0.2s;
	${InputNoneStyle}
	resize: none;
	color: ${WHITE};
	&:focus {
		border: 1.5px inset #c6c6c6;
		color: ${BLACK};
		background-color: ${WHITE};
	}
`
