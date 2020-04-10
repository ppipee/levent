import styled from 'styled-components'
import { WHITE, CenterFlex, SoftShadow, BLACK, InputNoneStyle } from 'common/style'

export const GalleryContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	margin-bottom: 8px;
`
export const GalleryWrapper = styled.div`
	padding: 8px 8px;
	display: flex;
	flex-wrap: wrap;
`
export const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 120px;
	border-radius: 2px;
	padding: 8px 8px 0;
	img {
		width: 120px;
		height: 120px;
		object-fit: cover;
		margin-bottom: 6px;
	}
`
export const TitleImage = styled.input`
	font-size: 12px;
	line-height: 12px;
	text-align: center;
	width: 120px;
	padding: 2px 4px;
	box-sizing: border-box;
	border-radius: 1px;
	color: ${WHITE};
	transition: ease-in all 0.2s;
	${InputNoneStyle}
	&:focus {
		color: ${BLACK};
		background: ${WHITE};
	}
`
export const UploadImage = styled.div`
	margin: 25px 0 0 25px;
	width: 70px;
	height: 70px;
	border-radius: 2px;
	box-sizing: border-box;
	border: 1px solid ${WHITE};
	transition: all 0.2s;
	cursor: pointer;
	${CenterFlex()}
	&:hover {
		${SoftShadow}
		margin: 0;
		width: 120px;
		height: 120px;
		background: ${WHITE};
		svg path {
			fill: ${BLACK};
		}
		/* background: rgba(247, 247, 247, 0.05); */
	}
`
