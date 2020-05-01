export type TLocation = 'address' | 'street' | 'province' | 'county' | 'district' | 'postCode'

export interface ILocation {
	address: string
	street?: string
	province?: string
	county?: string
	district?: string
	postCode?: string
}
// for startDateTime and endDatetime
export interface IDateTime {
	startDate: string //YYYY-MM-DD
	startTime: string //HH:mm:00
	endDate?: string
	endTime?: string
}
