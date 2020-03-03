import { useReducer } from 'react'

export interface IStepperState {
	show: boolean
}
export interface IStepperAction {
	type: string
}

const initialState: IStepperState = {
	show: false,
}

const StepperReducer = () => {
	const [state, dispatch] = useReducer((state: IStepperState, action: IStepperAction) => {
		switch (action.type) {
			case 'OPEN':
				return { show: true }
			case 'CLOSE':
				return { show: false }
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default StepperReducer
