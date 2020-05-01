export type TSchedule = 'start' | 'end' | 'detail'

export interface ISchedulePeriod {
	start: string
	end: string
	detail: string
}

export interface ISchedule {
	title: string
	schedule: ISchedulePeriod[]
}
