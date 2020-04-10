import React, { useState, ChangeEvent } from 'react'
import TitleDetail from 'component/TitleDetail'
import { GalleryWrapper, GalleryContainer, ImageContainer, TitleImage, UploadImage } from './style'
import ImageNotFound from 'asset/img/img_not_found.png'
import AddIcon from 'asset/icon/add'
import { IGallery } from 'common/toolsType'

interface PropTypes {
	getGallery: IGallery
}

const GalleryDetail = ({ getGallery }: PropTypes) => {
	const [title, setTitle] = useState(getGallery.title)
	const [gallery, setGallery] = useState(getGallery.gallery)
	const handleTitleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const value = e.target.value
		setTitle(value)
	}
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const index = e.target.getAttribute('data-index') as string
		let new_gallery = [...gallery]
		new_gallery[+index].detail = value
		setGallery(new_gallery)
	}
	return (
		<GalleryContainer>
			{title && <TitleDetail value={title} onChange={handleTitleChange} />}
			<GalleryWrapper>
				{gallery.map(({ path, detail }, index) => (
					<ImageContainer>
						<img src={path ? path : ImageNotFound} />
						<TitleImage value={detail} onChange={handleChange} data-index={index} />
					</ImageContainer>
				))}
				<ImageContainer>
					<UploadImage>
						<AddIcon size="24" />
					</UploadImage>
				</ImageContainer>
			</GalleryWrapper>
		</GalleryContainer>
	)
}
export default GalleryDetail
