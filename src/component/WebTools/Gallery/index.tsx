import React, { useState, MouseEvent } from 'react'
import { WebToolsWrapper, WebToolsTitle, WebToolsInput } from 'common/toolsStyle'
import { ImgWrapper, MainImg, ImgContainer, GalleryWrapper, ImgTitle, ImgDetail } from './style'
import ImgNotFound from 'asset/img/img_not_found.png'

const gallery = [
	{ name: 'img1', img: ImgNotFound },
	{ name: 'img2', img: ImgNotFound },
	{ name: 'img3', img: ImgNotFound },
	{ name: 'img4', img: ImgNotFound },
]

const Gallery = () => {
	const [main, setMain] = useState(0)

	const selectImg = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLInputElement
		const index = target.getAttribute('data-index') as string
		setMain(+index)
	}
	return (
		<WebToolsWrapper>
			<WebToolsTitle>
				<WebToolsInput value={'Gallery'} />
			</WebToolsTitle>
			<GalleryWrapper>
				<MainImg>
					<ImgTitle>{gallery[main].name}</ImgTitle>
					<img src={gallery[main].img} alt={`gallery-main`} />
				</MainImg>
				<ImgContainer>
					{gallery.map((data, index) => (
						<ImgWrapper key={`gallery-${data.name}`} data-index={index} onClick={selectImg}>
							{console.log(index)}
							<img src={data.img} alt={`gallery-${data.name}`} />
							<ImgDetail>{data.name}</ImgDetail>
						</ImgWrapper>
					))}
				</ImgContainer>
			</GalleryWrapper>
		</WebToolsWrapper>
	)
}
export default Gallery
