import { useReducer } from 'react'
import { DEFAULT_INFO } from 'common/constant'
import { EventInfoAction as Action } from 'action'

export interface IEventInfoState {
	name: string
	startDate: string
	startTime: string
	endDate?: string
	endTime?: string
	location: {
		place: string
		province: string
		district: string
		postCode: string
	}
	shortTeaser: string
}
export interface IEventInfoAction {
	type: string
	info: object
}

const initialState: IEventInfoState = {
	...DEFAULT_INFO,
}

const EventInfoReducer = () => {
	const [state, dispatch] = useReducer((state: IEventInfoState, action: IEventInfoAction) => {
		switch (action.type) {
			case Action.info:
				return {
					...state,
					...action.info,
				}
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default EventInfoReducer
