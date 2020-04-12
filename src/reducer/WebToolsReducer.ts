import { useReducer } from 'react'
import { DEFAULT_WEB_TOOLS } from 'common/constant'
import { IWebTools } from 'common/type'
import { WebToolsAction as Action } from 'action'

export interface IWebToolsAction {
	type: string
	tools: IWebTools
}

export interface IWebToolState extends IWebTools {
	// tools: IWebTools
}

const initialState: IWebToolState = {
	...DEFAULT_WEB_TOOLS,
}

const WebToolsReducer = () => {
	const [state, dispatch] = useReducer((state: IWebToolState, action: IWebToolsAction) => {
		switch (action.type) {
			case Action.tools:
				return {
					...state,
					tools: { ...action.tools },
				}
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default WebToolsReducer
