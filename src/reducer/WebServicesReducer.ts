import { useReducer } from 'react'
import { DEFAULT_SERVICES } from 'common/constant'

export interface IWebServicesState {
	page?: {
		single: boolean
		multi: boolean
	}
	registration?: boolean
	ticket?: {
		free: boolean
		pay: boolean
	}
}
export interface IWebServicesAction {
	type: string
}

const initialState: IWebServicesState = {
	...DEFAULT_SERVICES,
}

const WebServicesReducer = () => {
	const [state, dispatch] = useReducer((state: IWebServicesState, action: IWebServicesAction) => {
		switch (action.type) {
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default WebServicesReducer
