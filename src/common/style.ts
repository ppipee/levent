import { css } from 'styled-components'

export const WHITE = '#F7F7F7'
export const BLACK = '#404040'

export const SoftShadow = css`
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
export const HardShadow = css`
	box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.2);
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
