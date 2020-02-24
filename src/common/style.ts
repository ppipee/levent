import { css } from 'styled-components'

export const WHITE = '#F7F7F7'
export const BLACK = '#404040'

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
	max-width: 968px;
	width: 100%;
	box-sizing: border-box;
	padding: 24px;
	min-height: calc(100vh - 56px);
`
