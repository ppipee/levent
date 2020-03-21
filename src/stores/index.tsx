import React, { createContext, ReactNode } from 'react'
import { StepperReducer, EventInfoReducer, WebServicesReducer, WebToolsReducer, WebEditReducer } from 'reducer'

export const StoreContext = createContext({} as any)

interface StoreProps {
	children: ReactNode
}

export const ContextProvider = ({ children }: StoreProps) => {
	// store in Reducer
	const Stepper = StepperReducer()
	const EventInfo = EventInfoReducer()
	const WebService = WebServicesReducer()
	const WebTools = WebToolsReducer()
	const WebEdit = WebEditReducer()

	const store = {
		stepper: { state: Stepper.state, dispatch: Stepper.dispatch },
		eventInfo: { state: EventInfo.state, dispatch: EventInfo.dispatch },
		webService: { state: WebService.state, dispatch: WebService.dispatch },
		webTools: { state: WebTools.state, dispatch: WebTools.dispatch },
		webEdit: { state: WebEdit.state, dispatch: WebEdit.dispatch },
	}

	return <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
}
