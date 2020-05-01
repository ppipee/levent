import { useReducer } from 'react'
import { DEFAULT_WEB_TOOLS, DEFAULT_SCHEDULE } from 'common/constant'
import { IWebStatusTools } from 'common/type'
import { WebToolsAction as Action } from 'action'
import { ISchedule } from 'common/propTypes/tools'

export interface IWebToolsAction {
	type: string
	statusTools?: IWebStatusTools
	schedules?: ISchedule[]
}

export interface IWebToolState {
	statusTools: IWebStatusTools
	schedules?: ISchedule[]
}

const initialState: IWebToolState = {
	statusTools: { ...DEFAULT_WEB_TOOLS },
	schedules: [DEFAULT_SCHEDULE],
}

const WebToolsReducer = () => {
	const [state, dispatch] = useReducer((state: IWebToolState, action: IWebToolsAction) => {
		switch (action.type) {
			case Action.statusTools:
				return {
					...state,
					statusTools: { ...(action.statusTools as IWebStatusTools) },
				}
			case Action.schedule:
				const new_schedules = state.schedules || []
				return {
					...state,
					schedules: action.schedules as ISchedule[],
				}
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default WebToolsReducer
