import { useReducer } from 'react'
import { StepperAction } from 'action'

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
			case StepperAction.open:
				return { show: true }
			case StepperAction.close:
				return { show: false }
			default:
				return state
		}
	}, initialState)
	return { state, dispatch }
}

export default StepperReducer
