import { useReducer } from 'react'
import { DEFAULT_INFO } from 'common/constant'
import { EventInfoAction as Action } from 'action'
import { IEventInfo } from 'common/type'

const initialState: IEventInfo = {
	...DEFAULT_INFO,
}

interface IEventInfoAction {
	type: string
	info: object
	location: {
		place: string
		province: string
		district: string
		postCode: string
	}
	start: object
	end: object
}

const EventInfoReducer = () => {
	const [state, dispatch] = useReducer((state: IEventInfo, action: IEventInfoAction) => {
		switch (action.type) {
			case Action.info:
				return {
					...state,
					...action.info,
				}
			case Action.location:
				return {
					...state,
					location: action.location,
				}
			case Action.start:
				return {
					...state,
				}
			case Action.end:
				return {
					...state,
				}
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default EventInfoReducer
