import { useReducer } from 'react'
import { DEFAULT_WEB_TOOLS } from 'common/constant'

export interface IWebToolsState {
	schedule: boolean
	registration: boolean
	map: boolean
	route: boolean
	gallery: boolean
	ticket: boolean
	sponser: boolean
	socialFollow: boolean
}
export interface IWebToolsAction {
	type: string
}

const initialState: IWebToolsState = {
	...DEFAULT_WEB_TOOLS,
}

const WebToolsReducer = () => {
	const [state, dispatch] = useReducer((state: IWebToolsState, action: IWebToolsAction) => {
		switch (action.type) {
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default WebToolsReducer
