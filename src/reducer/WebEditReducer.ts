import { useReducer } from 'react'
import { WebEditAction as Action } from 'action'
import { IWebEdit, ToolsType } from 'common/type'
import { DEFAULT_WEB_EDIT } from 'common/constant'

export interface IWebEditAction {
	type: string
	select: ToolsType
}

export const initialState: IWebEdit = {
	...DEFAULT_WEB_EDIT,
}

const WebEditReducer = () => {
	const [state, dispatch] = useReducer((state: IWebEdit, action: IWebEditAction) => {
		switch (action.type) {
			case Action.build:
				return {
					...state,
					build: true,
				}
			case Action.select:
				return {
					...state,
					selectedTool: action.select,
				}
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default WebEditReducer
