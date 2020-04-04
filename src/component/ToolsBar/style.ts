import styled, { css } from 'styled-components'
import { WHITE, HardShadow } from 'common/style'

export const PositionWrapper = styled.div`
	position: fixed;
	z-index: 10;
	left: 0;
	top: 50%;
	margin-top: 28px;
	transform: translateY(-50%);
`
export const BarWrapper = styled.div`
	max-height: 60%;
	min-height: 560px;
	border-radius: 0 10px 10px 0;
	width: 64px;
	padding: 12px 0;
	background: rgba(0, 0, 0, 0.6);
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	${HardShadow}
`
export const ToolWrapper = styled.div`
	display: flex;
	border-radius: 4px;
	transition: all 0.2s;
	padding: 8px 8px;
	cursor: pointer;
	${({ active }: { active?: boolean }) =>
		active
			? css`
					border: 1px solid ${WHITE};
			  `
			: css`
					border: 1px solid transparent;
					&:hover {
						background: rgba(0, 0, 0, 0.4);
					}
			  `}
`
export const ToolsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-grow: 1;
`
export const ToolImg = styled.img`
	pointer-events: none;
	display: flex;
`
export const ArrowUp = styled.div`
	transform: rotate(-90deg);
	padding: 4px;
	border-radius: 4px;
	margin: 0 0 8px;
	cursor: pointer;
	&:hover {
		background: rgba(0, 0, 0, 0.4);
	}
`
export const ArrowDown = styled(ArrowUp)`
	transform: rotate(90deg);
	margin: 8px 0 0;
`
