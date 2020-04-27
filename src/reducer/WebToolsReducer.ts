import { useReducer } from 'react'
import { DEFAULT_WEB_TOOLS } from 'common/constant'
import { IWebStatusTools } from 'common/type'
import { WebToolsAction as Action } from 'action'

export interface IWebToolsAction {
	type: string
	statusTools: IWebStatusTools
}

export interface IWebToolState {
	// tools: IWebTools
	statusTools: IWebStatusTools
}

const initialState: IWebToolState = {
	statusTools: { ...DEFAULT_WEB_TOOLS },
}

const WebToolsReducer = () => {
	const [state, dispatch] = useReducer((state: IWebToolState, action: IWebToolsAction) => {
		switch (action.type) {
			case Action.statusTools:
				return {
					...state,
					statusTools: { ...action.statusTools },
				}
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default WebToolsReducer
