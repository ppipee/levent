export interface IGalleryImage {
	path: string
	detail: string
}
export interface IGallery {
	title?: string
	gallery: IGalleryImage[]
}

export interface ISocial {
	[key: string]: string
	facebook: string
	instagram: string
	twitter: string
	youtube: string
}
