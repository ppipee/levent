import { useReducer } from 'react'
import { WebEdit as Action } from 'action'
import { IWebEdit } from 'common/type'
import { DEFAULT_WEB_EDIT } from 'common/constant'

export interface IWebEditAction {
	type: string
}

const initialState: IWebEdit = {
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
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default WebEditReducer
