import React, { useState, MouseEvent, ChangeEvent } from 'react'
import Popup from 'component/Popup'
import {
	CardContent,
	CardTitle,
	ButtonContainer,
	Button,
	CloseButton,
	CardWrapper,
	InputWrapper,
	InputTitle,
	InputField,
	BorderInput,
	BorderInfo,
	CardToolsWrapper,
	CardToolsBorder,
	CardToolsContent,
	CheckButton,
	CardToolsTitle,
	ToolIcon,
} from './style'
import CloseIcon from 'asset/icon/close.svg'
import { DEFAULT_INFO, DEFAULT_SERVICES, DEFAULT_WEB_TOOLS } from 'common/constant'
import ScheduleIcon from 'asset/icon/schedule.svg'
import RegistrationIcon from 'asset/icon/registration.svg'
import MapIcon from 'asset/icon/map.svg'
import RouteIcon from 'asset/icon/route.svg'
import GalleryIcon from 'asset/icon/gallery.svg'
import TicketIcon from 'asset/icon/ticket.svg'
import SponserIcon from 'asset/icon/sponser.svg'
import FollowIcon from 'asset/icon/follower.svg'
import CheckIcon from 'asset/icon/check.svg'

const WEBTOOLS = [
	{ name: 'schedule', icon: ScheduleIcon },
	{ name: 'registratoin', icon: RegistrationIcon },
	{ name: 'map', icon: MapIcon },
	{ name: 'route', icon: RouteIcon },
	{ name: 'gallery', icon: GalleryIcon },
	{ name: 'ticket', icon: TicketIcon },
	{ name: 'sponser', icon: SponserIcon },
	{ name: 'social follow', icon: FollowIcon },
]
const Stepper = () => {
	const [show, setShow] = useState(true)
	const [info, setInfo] = useState(DEFAULT_INFO)
	const [tools, setTools] = useState(DEFAULT_WEB_TOOLS)
	const [services, setServices] = useState(DEFAULT_SERVICES)
	const [step, setStep] = useState(1)
	const handleClose = () => {
		setShow(false)
	}
	const handleOpen = () => {
		setShow(true)
	}
	const nextStep = () => {
		if (step < 2) setStep(step + 1)
		else console.log('Create Event')
	}
	const prevStep = () => {
		if (step > 0) setStep(step - 1)
		else setShow(false)
	}
	const setState = (event: MouseEvent<HTMLDivElement> & ChangeEvent<HTMLInputElement>) => {
		const e = event.target as HTMLInputElement
		const key = e.getAttribute('data-key') as string
		const value = e.value
		if (step === 0) setInfo({ ...info, [key]: value })
		else if (step === 1) {
			const check = e.getAttribute('value') === 'true' ? true : false
			setTools({ ...tools, [key]: !check })
		}
	}
	const FirstStep = () => (
		<>
			<InputWrapper>
				<InputTitle>Event Name</InputTitle>
				<BorderInput active={info.name !== ''}>
					<InputField value={info.name} data-key="name" onChange={setState} />
				</BorderInput>
			</InputWrapper>
			<InputWrapper>
				<InputTitle>Short Teaser</InputTitle>
				<BorderInfo active={info.shortTeaser !== ''}>
					<InputField value={info.shortTeaser} data-key="shortTeaser" onChange={setState} />
				</BorderInfo>
			</InputWrapper>
		</>
	)

	const SecondStep = () => (
		<CardToolsWrapper>
			{WEBTOOLS.map(tool => (
				<CardToolsBorder active={tools[tool.name]}>
					<CardToolsContent>
						<ToolIcon>
							<img src={tool.icon} alt={`${tool.name}-icon`} />
						</ToolIcon>
						<CardToolsTitle>{tool.name}</CardToolsTitle>
						{tools[tool.name] ? (
							<CheckButton onClick={setState} data-key={tool.name} value={tools[tool.name]}>
								<img src={CheckIcon} alt="check-icon" />
							</CheckButton>
						) : (
							<CheckButton onClick={setState} data-key={tool.name} value={tools[tool.name]} />
						)}
					</CardToolsContent>
				</CardToolsBorder>
			))}
		</CardToolsWrapper>
	)
	const ThirdStep = () => <div>Third</div>

	const STEP = [
		{ title: 'General Info', button: ['cancel', 'next'], component: FirstStep() },
		{ title: 'Web Tools', button: ['back', 'next'], component: SecondStep() },
		{ title: 'Web Services', button: ['back', 'create'], component: ThirdStep() },
	]
	return (
		<Popup show={show} handleClose={handleClose}>
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
