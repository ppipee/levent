import ImageNotFound from 'asset/img/img_not_found.png'
import { IGallery } from 'common/toolsType'
import { ISchedule } from 'common/propTypes/tools'

export const SCHEDULE: ISchedule[] = [
	{
		title: 'teddd',
		schedule: [
			{ start: '07:00', end: '08:00', detail: 'register' },
			{ start: '08:00', end: '09:00', detail: 'talk show' },
		],
	},
	{
		title: 'teddd',
		schedule: [
			{ start: '07:00', end: '08:00', detail: 'register' },
			{ start: '08:00', end: '09:00', detail: 'talk show' },
		],
	},
]

export const GALLERY: IGallery[] = [
	{
		title: 'Gallery',
		gallery: [
			{ path: ImageNotFound, detail: 'name1' },
			{ path: ImageNotFound, detail: 'name1' },
		],
	},
	{
		title: 'Gallery',
		gallery: [
			{ path: ImageNotFound, detail: 'name1' },
			{ path: ImageNotFound, detail: 'name1' },
		],
	},
]
