import React, { useState, MouseEvent, ChangeEvent } from 'react'
import Popup from 'component/Popup'
import { CardContent, CardTitle, ButtonContainer, Button, CloseButton, CardWrapper } from './style'
import CloseIcon from 'asset/icon/close.svg'
import { DEFAULT_INFO, DEFAULT_SERVICES, DEFAULT_WEB_TOOLS } from 'common/constant'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import useRedux from 'common/useRedux'
import { StepperAction } from 'action'

const Stepper = () => {
	const [state, dispatch] = useRedux('stepper')
	const [info, setInfo] = useState(DEFAULT_INFO)
	const [tools, setTools] = useState(DEFAULT_WEB_TOOLS)
	const [services, setServices] = useState(DEFAULT_SERVICES)
	const [step, setStep] = useState(0)

	const handleClose = () => {
		dispatch({ type: StepperAction.close })
	}
	const nextStep = () => {
		if (step < 2) setStep(step + 1)
		else console.log('Create Event')
	}
	const prevStep = () => {
		if (step > 0) setStep(step - 1)
		else handleClose()
	}
	const setState = (event: MouseEvent<HTMLDivElement> & ChangeEvent<HTMLInputElement>) => {
		const e = event.target as HTMLInputElement
		const key = e.getAttribute('data-key') as string
		const value = e.value
		if (step === 0) setInfo({ ...info, [key]: value })
		else if (step === 1) {
			const check = e.getAttribute('value') === 'true' ? true : false
			console.log(key, !check)
			setTools({ ...tools, [key]: !check })
		} else if (step === 2) {
			const role = e.getAttribute('role') as string
			const check = e.getAttribute('value') === 'true' ? true : false
			if (role === 'page') {
				const page_state: any = { single: false, multi: false }
				page_state[key] = true
				setServices({ ...services, [role]: page_state })
			} else setServices({ ...services, [role]: { ...services[role], [key]: !check } })
		}
	}
	console.log(tools)

	const STEP = [
		{ title: 'General Info', button: ['cancel', 'next'], component: <FirstStep info={info} setState={setState} /> },
		{ title: 'Web Tools', button: ['back', 'next'], component: <SecondStep tools={tools} setState={setState} /> },
		{
			title: 'Web Services',
			button: ['back', 'create'],
			component: <ThirdStep registration={tools.registration} services={services} setState={setState} />,
		},
	]
	return (
		<Popup show={state.show} handleClose={handleClose}>
			<CardWrapper>
				<CardTitle>
					{STEP[step].title}
					<CloseButton onClick={handleClose}>
						<img src={CloseIcon} alt="close-icon" />
					</CloseButton>
				</CardTitle>
				<CardContent>{STEP[step].component}</CardContent>
				<ButtonContainer>
					<Button onClick={prevStep}>{STEP[step].button[0]}</Button>
					<Button onClick={nextStep} main>
						{STEP[step].button[1]}
					</Button>
				</ButtonContainer>
			</CardWrapper>
		</Popup>
	)
}
export default Stepper
