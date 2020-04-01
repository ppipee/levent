import { css } from 'styled-components'

export const WHITE = '#F7F7F7'
export const BLACK = '#404040'
export const WHITE_GRAY = '#E7E7E7'
export const SUB_COLOR = '#FA818C'
export const MAIN_COLOR = '#FA709A'

export const SoftShadow = css`
	box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
`
export const HardShadow = css`
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
`

export const FontColor = (color: string) =>
	css`
		color: ${color === 'white' ? WHITE : BLACK};
	`
export const CenterAbsolute = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
export const SpaceBetweenFlex = (direction = 'row') => css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: ${direction};
`
export const CenterFlex = (direction = 'row') => css`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${direction};
`
export const ContainerResponse = css`
	max-width: 1152px;
	/* width: 100%; */
	box-sizing: border-box;
	padding: 24px;
	min-height: calc(100vh - 56px);
`

export const ButtonLevent = css`
	height: 48px;
	font-size: 16px;
	font-weight: medium;
	line-height: 16px;
	border-radius: 24px;
	transition: all 0.3s;
	margin: 8px;

	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;
	text-transform: uppercase;

	&:hover {
		cursor: pointer;
	}
	${CenterFlex()}
	${({ main }: { main?: boolean }) =>
		main
			? css`
					background: linear-gradient(109.44deg, #fa709a 0%, #fee140 100%);
					color: white;
					${SoftShadow}
					&:hover {
						background: linear-gradient(133.63deg, #fa709a 29.71%, #fee140 108.47%);
					}
			  `
			: css`
					background: white;
					box-sizing: border-box;
					border: 2.5px solid ${SUB_COLOR};
					color: ${SUB_COLOR};
					&:hover {
						background: rgba(0, 0, 0, 0.2);
					}
			  `}
`

export const Field = css`
	position: absolute;
	margin: 0.8px 1px 1px 1px;
	height: calc(100% - 1.8px);
	width: calc(100% - 2px);
	border-radius: 4.5px;
	background-color: white;
`

export const BorderGradient = css`
	width: 296px;
	position: relative;
	border-radius: 5px;
	background: ${WHITE_GRAY};
	height: 41.09px;
`
export const InputNoneStyle = css`
	outline: none;
	border: none;
	background: transparent;
`
