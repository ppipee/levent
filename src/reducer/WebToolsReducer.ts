import { useReducer } from 'react'
import { DEFAULT_WEB_TOOLS } from 'common/constant'
import { IWebTools } from 'common/type'

export interface IWebToolsAction {
	type: string
}

const initialState: IWebTools = {
	...DEFAULT_WEB_TOOLS,
}

const WebToolsReducer = () => {
	const [state, dispatch] = useReducer((state: IWebTools, action: IWebToolsAction) => {
		switch (action.type) {
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default WebToolsReducer
