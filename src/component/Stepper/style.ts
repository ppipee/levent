import styled, { css } from 'styled-components'
import {
	CenterFlex,
	WHITE,
	ButtonLevent,
	WHITE_GRAY,
	BLACK,
	Field,
	BorderGradient,
	SpaceBetweenFlex,
} from 'common/style'

export const CardWrapper = styled.div`
	background: ${WHITE};
	border-radius: 4px;
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;
`
export const CardContent = styled.div`
	border-radius: 0 0 4px 4px;
	box-sizing: border-box;
	padding: 18px 32px;
	font-size: 16px;
	text-transform: capitalize;
	${CenterFlex('column')}
`
export const CardTitle = styled.div`
	border-radius: 4px 4px 0 0;
	font-size: 18px;
	color: ${WHITE};
	line-height: 18px;
	text-align: center;
	box-sizing: border-box;
	padding: 16px;
	background: #303030;
	position: relative;
`
export const CloseButton = styled.div`
	position: absolute;
	top: 12px;
	right: 12px;
	cursor: pointer;
`

export const ButtonContainer = styled.div`
	padding: 4px 4px 24px;
	${CenterFlex()}
`
export const Button = styled.div`
	${ButtonLevent}
	width:136px;
	text-transform: uppercase;
	margin: 8px;
`

// First Step
export const InputWrapper = styled.div`
	width: 100%;
	margin: 6px 0;
`
export const InputTitle = styled.div`
	margin-bottom: 4px;
`

export const InputField = styled.input`
	${Field}
	line-height: 16px;
	box-sizing: border-box;
	padding: 10px 12px;
	outline: none;
	border: none;
	color: ${BLACK};
`
interface PropTypes {
	active?: boolean
	height?: string
}
export const BorderInput = styled.div`
	${BorderGradient}
	transition: all 0.8s;
	${({ active }: PropTypes) =>
		active
			? css`
					background: linear-gradient(97.13deg, #fa709a 0%, #fee140 100.02%);
			  `
			: ''}
`
export const BorderInfo = styled(BorderInput)`
	height: 77.27px;
`

// Second Step

export const CardToolsWrapper = styled.div`
	${CenterFlex()}

	flex-wrap: wrap;
	padding: 14px 24px 0;
	box-sizing: border-box;
	max-width: 600px;
	min-width: 375px;
	width: 100%;
`
export const CardToolsBorder = styled(BorderInput)`
	height: 64px;
	width: 264px;
	margin: 6px;
`
export const CardToolsContent = styled.div`
	${Field}
	height: calc(100% - 3.8px);
	width: calc(100% - 3.8px);
	margin: 2px;
	box-sizing: border-box;
	padding: 12px;
	${SpaceBetweenFlex()}
`
export const CardToolsTitle = styled.div`
	margin: 0 auto 0 8px;
`
export const CheckButton = styled.div`
	${({ value }: { value: boolean }) =>
		value
			? css`
					display: flex;
					img {
						pointer-events: none;
					}
			  `
			: css`
					width: 27.09px;
					height: 27.09px;
					border-radius: 5.5px;
					background-color: white;
					box-sizing: border-box;
					border: 1.5px solid ${WHITE_GRAY};
					margin-right: 4.91px;
			  `};
`

export const ToolIcon = styled.div`
	width: 40px;
	height: 40px;
	${CenterFlex()}
	img {
		margin: auto;
	}
`

// third step
export const CardServicesWrapper = styled.div`
	margin: 8px 0;
	box-sizing: border-box;
	padding: 16px 12px 12px;
	border-radius: 5px;
	border: 1px solid ${WHITE_GRAY};
	text-transform: capitalize;
	max-width: 480px;
	width: 100%;
`
export const CardServicesContainer = styled.div`
	${CenterFlex()}
	flex-wrap:wrap;
	justify-content: start;
`

export const CardServiceBorder = styled(BorderInput)`
	height: 54px;
	width: 176px;
	margin: 6px;
`
export const ServiceIcon = styled(ToolIcon)`
	width: 30px;
	height: 30px;
	img {
		width: inherit;
		height: inherit;
	}
`
export const ServiceCheckButton = styled.div`
	${({ value }: { value: boolean }) =>
		value
			? css`
					display: flex ;
					img {
						pointer-events: none;
						width: 25px;
						height: 25px;
			  `
			: css`
					width: 21.09px;
					height: 21.09px;
					border-radius: 5.5px;
					background-color: white;
					box-sizing: border-box;
					border: 1.5px solid ${WHITE_GRAY};
					margin-right: 4.91px;
			  `};
`
