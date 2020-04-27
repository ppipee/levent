import React, { createContext, ReactNode, Dispatch } from 'react'
import { StepperReducer, EventInfoReducer, WebServicesReducer, WebToolsReducer, WebEditReducer } from 'reducer'
import { IStepperState, IStepperAction } from 'reducer/StepperReducer'
import { IEventInfo, IWebStatusTools, IWebEdit } from 'common/type'
import { IWebServicesState, IWebServicesAction } from 'reducer/WebServicesReducer'
import { IWebEditAction } from 'reducer/WebEditReducer'
import { IWebToolsAction, IWebToolState } from 'reducer/WebToolsReducer'
import { IEventInfoAction } from 'reducer/EventInfoReducer'
export const StoreContext = createContext({} as any)

interface StoreProps {
	children: ReactNode
}

export interface StoreState {
	stepper: IStepperState
	eventInfo: IEventInfo
	webService: IWebServicesState
	webTools: IWebToolState
	webEdit: IWebEdit
}

export interface ActionState {
	stepper: Dispatch<IStepperAction>
	eventInfo: Dispatch<IEventInfoAction>
	webService: Dispatch<IWebServicesAction>
	webTools: Dispatch<IWebToolsAction>
	webEdit: Dispatch<IWebEditAction>
}

export const ContextProvider = ({ children }: StoreProps) => {
	// store in Reducer
	const Stepper = StepperReducer()
	const EventInfo = EventInfoReducer()
	const WebService = WebServicesReducer()
	const WebTools = WebToolsReducer()
	const WebEdit = WebEditReducer()

	// const store = {
	// 	stepper: { state: Stepper.state, dispatch: Stepper.dispatch },
	// 	eventInfo: { state: EventInfo.state, dispatch: EventInfo.dispatch },
	// 	webService: { state: WebService.state, dispatch: WebService.dispatch },
	// 	webTools: { state: WebTools.state, dispatch: WebTools.dispatch },
	// 	webEdit: { state: WebEdit.state, dispatch: WebEdit.dispatch },
	// }
	const store: { state: StoreState; dispatch: ActionState } = {
		state: {
			stepper: Stepper.state,
			eventInfo: EventInfo.state,
			webService: WebService.state,
			webTools: WebTools.state,
			webEdit: WebEdit.state,
		},
		dispatch: {
			stepper: Stepper.dispatch,
			eventInfo: EventInfo.dispatch,
			webService: WebService.dispatch,
			webTools: WebTools.dispatch,
			webEdit: WebEdit.dispatch,
		},
	}

	return <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
}
