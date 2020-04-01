import React, { useState, MouseEvent, ChangeEvent } from 'react'
import Popup from 'component/Popup'
import { CardContent, CardTitle, ButtonContainer, Button, CloseButton, CardWrapper } from './style'
import CloseIcon from 'asset/icon/close.svg'
import { DEFAULT_INFO, DEFAULT_SERVICES, DEFAULT_WEB_TOOLS } from 'common/constant'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import ForthStep from './ForthStep'
import useRedux from 'common/useRedux'
import { StepperAction, EventInfoAction } from 'action'
import history from 'common/history'

const Stepper = () => {
	const [state, dispatch] = useRedux()
	const [info, setInfo] = useState(DEFAULT_INFO)
	const [tools, setTools] = useState(DEFAULT_WEB_TOOLS)
	const [services, setServices] = useState(DEFAULT_SERVICES)
	const [step, setStep] = useState(0)

	const handleClose = () => {
		dispatch.stepper({ type: StepperAction.close })
	}
	const nextStep = () => {
		if (step < 3) setStep(step + 1)
		else {
			console.log('Create Event')
			dispatch.eventInfo({ type: EventInfoAction.info, info: info })
			history.push('/dashboard/organize/' + info.name.toLowerCase())
			handleClose()
		}
	}
	const prevStep = () => {
		if (step > 0) setStep(step - 1)
		else handleClose()
	}
	const setState = (event: MouseEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const e = event.target as HTMLInputElement
		const key = e.getAttribute('data-key') as string
		const value = e.value
		if (step === 0 || step === 3) setInfo({ ...info, [key]: value })
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

	const STEP = [
		{ title: 'General Info', button: ['cancel', 'next'], component: <FirstStep info={info} setState={setState} /> },
		{ title: 'Web Tools', button: ['back', 'next'], component: <SecondStep tools={tools} setState={setState} /> },
		{
			title: 'Web Services',
			button: ['back', 'next'],
			component: <ThirdStep registration={tools.registration} services={services} setState={setState} />,
		},
		{
			title: 'Web Name',
			button: ['back', 'create'],
			component: <ForthStep info={info} setState={setState} />,
		},
	]
	return (
		<Popup show={state.stepper.show} handleClose={handleClose}>
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
