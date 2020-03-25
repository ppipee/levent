import styled, { css } from 'styled-components'
import { SUB_COLOR, MAIN_COLOR, SpaceBetweenFlex } from 'common/style'

export const SearchField = styled.input`
	flex-grow: 1;
	line-height: 12px;
	font-size: 12px;
	box-sizing: border-box;
	border: none;
	outline: none;
	&::placeholder {
		color: #c0c0c0;
	}
`

export const SearchWrapper = styled.div`
	${SpaceBetweenFlex()}
	height:32px;
	border-radius: 14px;
	width: 100%;
	box-sizing: border-box;
	padding: 0 12px;
	transition: all 0.5s;
	img {
		display: flex;
		margin: auto 0 4px;
	}
	&:hover {
		border: 1px solid ${MAIN_COLOR};
	}
	${({ theme }: { theme?: string }) =>
		theme
			? css`
					border: 1px solid ${SUB_COLOR};
			  `
			: css`
					border: 1px solid white;
			  `}
`
