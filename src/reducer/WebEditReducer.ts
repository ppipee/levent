import { useReducer } from 'react'

export interface IWebEditState {}
export interface IWebEditAction {
	type: string
}

const initialState: IWebEditState = {}

const WebEditReducer = () => {
	const [state, dispatch] = useReducer((state: IWebEditState, action: IWebEditAction) => {
		switch (action.type) {
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default WebEditReducer
