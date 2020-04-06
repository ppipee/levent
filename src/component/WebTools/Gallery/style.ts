import styled from 'styled-components'

export const GalleryWrapper = styled.div`
	margin: 0 auto 24px;
	width: 100%;
`

export const ImgWrapper = styled.div`
	width: 124px;
	margin: 4px;
	cursor: pointer;
	text-align: center;
	font-size: 12px;
	img {
		background: rgba(0, 0, 0, 0.4);
		pointer-events: none;
		height: 72px;
		width: inherit;
		object-fit: cover;
		&:hover {
			background: rgba(0, 0, 0, 0.6);
		}
	}
`
export const ImgTitle = styled.div`
	font-size: 18px;
	line-height: 18px;
	margin-bottom: 16px;
	text-align: center;
	width: 100%;
`
export const MainImg = styled.div`
	width: 388px;
	height: calc(218.25px + 34px);
	margin: 0 20px;
	img {
		width: inherit;
		height: 218.25px;
		object-fit: cover;
	}
`
export const ImgDetail = styled.div`
	font-size: 12px;
	line-height: 12px;
	text-align: center;
	width: inherit;
	margin-top: 2px;
`
export const ImgContainer = styled.div`
	width: 400px;
	margin: 8px 16px;
	display: flex;
	overflow-x: auto;
`
