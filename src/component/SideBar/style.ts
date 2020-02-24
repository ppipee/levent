import styled, { css } from 'styled-components'
import { CenterFlex, FontColor, WHITE, BLACK, ContainerResponse } from 'common/style'

interface PropsType {
	active: boolean
}

export const SideBarWrapper = styled.div`
	display: flex;
`
export const ContentWrapper = styled.div`
	margin-left: 224px;
	flex-grow: 1;
	${ContainerResponse}
`
export const Bar = styled.div`
	${FontColor('white')}
	background-color: ${BLACK};
	position: fixed;
	left: 0;
	top: 56px;
	width: 224px;
	height: calc(100vh - 56px);
	font-size: 18px;
`

export const TabWrapper = styled.div`
	position: relative;
	width: inherit;
	height: 56px;
	${CenterFlex()}

	&:hover {
		${({ active }: PropsType) =>
			active
				? ''
				: css`
						cursor: pointer;
						background-color: rgba(247, 247, 247, 0.4);
				  `}
	}
`
export const Tab = styled.div`
	box-sizing: border-box;
	width: 204px;
	padding: 8px 10px;
	height: inherit;
	pointer-events: none;
	${CenterFlex()}
	text-transform: capitalize;
	${({ active }: PropsType) =>
		!active
			? ''
			: css`
					${FontColor('black')}
					transition: all 0.4s;
					background: ${WHITE};
					margin-left: calc(224px - 204px);
					box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
					&::after {
						content: '';
						position: absolute;
						top: 0px;
						left: 0;
						height: inherit;
						width: 12px;
						background: linear-gradient(180deg, #fa709a 0%, #fee140 100%);
						box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
					}
			  `}
`

export const Heading = styled.div`
	svg {
		width: 44px;
		height: 44px;
		margin-right: 6px;
	}
	${CenterFlex()}
	height: 96px;
	width: inherit;
`

export const ControlWrapper = styled.div`
	width: inherit;
	position: absolute;
	bottom: 0;
	left: 0;
`
export const Control = styled.div`
	box-sizing: border-box;
	padding: 24px 0;
	margin: 0 16px;
	border-top: 2px solid white;
`

export const ControlContent = styled.div`
	text-align: right;
	margin: 0 24px 12px 0;
	cursor: pointer;
`
