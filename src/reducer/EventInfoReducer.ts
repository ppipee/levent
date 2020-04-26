import { useReducer } from 'react'
import { DEFAULT_INFO } from 'common/constant'
import { EventInfoAction as Action } from 'action'
import { IEventInfo } from 'common/type'
import { ILocation, IDateTime } from 'common/propTypes/info'

const initialState: IEventInfo = {
	...DEFAULT_INFO,
}

export interface IEventInfoAction {
	type: string
	info?: object
	location?: ILocation
	start?: IDateTime
	end?: IDateTime
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
					location: action.location as ILocation,
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
