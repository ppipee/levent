import React, { createContext, ReactNode } from 'react'
import { StepperReducer } from 'reducer'

export const StoreContext = createContext({} as any)

interface StoreProps {
	children: ReactNode
}

export const ContextProvider = ({ children }: StoreProps) => {
	const Stepper = StepperReducer()
	const store = {
		stepper: { state: Stepper.state, dispatch: Stepper.dispatch },
	}

	return <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
}
