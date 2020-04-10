import styled, { css } from 'styled-components'
import { WHITE, CenterFlex, SUB_COLOR, MAIN_COLOR, SoftShadow, SpaceBetweenFlex } from 'common/style'

export const WindowContainer = styled.div`
	position: relative;
	min-width: 600px;
	width: 800px;
	max-width: 1100px;
`

export const ItemsContainer = styled.div`
	padding: 24px;
	box-sizing: border-box;
	background: rgba(51, 51, 51, 0.95);
	color: ${WHITE};
	display: flex;
	flex-direction: column;
`
export const Tab = styled.div`
	${CenterFlex()};
	color: ${WHITE};
	width: 112px;
	padding: 8px;
	box-sizing: border-box;
	font-size: 16px;
	text-transform: capitalize;
	transition: ease-in 0.2s;
	border-right: 1px solid rgba(247, 247, 247, 0.4);
	${({ active }: { active?: boolean }) =>
		active
			? css`
					background: rgba(51, 51, 51, 0.95);
			  `
			: css`
					background: rgba(51, 51, 51, 0.6);
					cursor: pointer;
					&:hover {
						background: rgba(51, 51, 51, 0.95);
					}
			  `}
`
export const TabsContainer = styled.div`
	display: flex;
`
export const ControlWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`
export const AddTool = styled.div`
	position: relative;
	top: -8px;
	width: 112px;
	padding: 12px;
	${CenterFlex()};
	svg {
		margin-right: 8px;
	}
	color: ${WHITE};
	border-radius: 2px;
	background: ${SUB_COLOR};
	transition: ease-in 0.2s;
	${SoftShadow}
	&:hover {
		cursor: pointer;
		background: ${MAIN_COLOR};
	}
`
