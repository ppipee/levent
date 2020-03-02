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
	CardServicesWrapper,
	CardServicesContainer,
	CardServiceBorder,
	ServiceIcon,
	ServiceCheckButton,
} from './style'
import CloseIcon from 'asset/icon/close.svg'
import { DEFAULT_INFO, DEFAULT_SERVICES, DEFAULT_WEB_TOOLS } from 'common/constant'
// second step
import ScheduleIcon from 'asset/icon/schedule.svg'
import RegistrationIcon from 'asset/icon/registration.svg'
import MapIcon from 'asset/icon/map.svg'
import RouteIcon from 'asset/icon/route.svg'
import GalleryIcon from 'asset/icon/gallery.svg'
import TicketIcon from 'asset/icon/ticket.svg'
import SponserIcon from 'asset/icon/sponser1.svg'
import FollowIcon from 'asset/icon/follower.svg'
import CheckIcon from 'asset/icon/check.svg'
// third step
import SingleIcon from 'asset/icon/single.svg'
import MultiIcon from 'asset/icon/multi.svg'
import FormIcon from 'asset/icon/form.svg'
import ReportIcon from 'asset/icon/report.svg'
import QrScanIcon from 'asset/icon/qr-code.svg'
import PayIcon from 'asset/icon/pay.svg'

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
const SERVICES: { [key: string]: any[] } = {
	page: [
		{ name: 'single', icon: SingleIcon },
		{ name: 'multi', icon: MultiIcon },
	],
	registration: [
		{ name: 'form', icon: FormIcon },
		{ name: 'report', icon: ReportIcon },
		{ name: 'QR scanner', icon: QrScanIcon },
	],
	ticket: [
		{ name: 'free', icon: TicketIcon },
		{ name: 'pay', icon: PayIcon },
	],
}
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
				<CardToolsBorder
					active={tools[tool.name]}
					key={`step-${tool.name}`}
					data-key={tool.name}
					onClick={setState}
					data-value={tools[tool.name]}
				>
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
	const ThirdStep = () =>
		Object.keys(SERVICES).map(key => (
			<CardServicesWrapper>
				<InputTitle>{key}</InputTitle>
				<CardServicesContainer>
					{SERVICES[key].map(data => (
						<CardServiceBorder>
							<CardToolsContent>
								<ServiceIcon>
									<img src={data.icon} alt={`${data.name}-icon`} />
								</ServiceIcon>
								<CardToolsTitle>{data.name}</CardToolsTitle>
								{key !== 'registration' &&
									(services[key][data.name] ? (
										<ServiceCheckButton
											onClick={setState}
											role={key}
											data-key={data.name}
											value={services[key][data.name]}
										>
											<img src={CheckIcon} alt="check-icon" />
										</ServiceCheckButton>
									) : (
										<ServiceCheckButton
											onClick={setState}
											role={key}
											data-key={data.name}
											value={services[key][data.name]}
										/>
									))}
							</CardToolsContent>
						</CardServiceBorder>
					))}
				</CardServicesContainer>
			</CardServicesWrapper>
		))

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
