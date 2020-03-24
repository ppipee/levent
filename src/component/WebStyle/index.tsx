import React, { useState, MouseEvent } from 'react'
import {
	SelectStyleWrapper,
	Title,
	CardsWrapper,
	TabHighLight,
	CardWrapper,
	BackgroundCard,
	ButtonContainer,
	Button,
	Background,
} from './style'
import TemplateIcon from 'asset/icon/template.svg'
import SelectTemplate from './SelectTemplate'

const info = [
	{ title: 'Web Template', icon: TemplateIcon, state: 'template' },
	{ title: 'Web Customizer', icon: TemplateIcon, state: 'customizer' },
]

const BUTTON_TEXT = ['Next Step', 'Build']

const WebStyle = () => {
	const [state, setState] = useState('template')
	const [step, setStep] = useState(0)
	const toggleState = (e: MouseEvent) => {
		const target = e.target as HTMLDivElement
		const key = target.getAttribute('data-key') as string
		setState(key)
	}
	const nextStep = () => {
		if (step !== 1) setStep(1)
		else buildWeb()
	}
	const prevStep = () => {
		setStep(0)
	}
	const buildWeb = () => {
		console.log('build')
	}

	const genCards = () =>
		info.map(info => (
			<div key={`${info.title}`}>
				<TabHighLight select={state === info.state} />
				<BackgroundCard select={state === info.state} data-key={info.state} onClick={toggleState}>
					<CardWrapper select={state === info.state}>
						<img src={info.icon} alt={`${info.state}-icon`} />
						<div>{info.title}</div>
					</CardWrapper>
				</BackgroundCard>
			</div>
		))

	const genButton = () =>
		state === 'customizer' ? (
			<Button main onClick={buildWeb}>
				{BUTTON_TEXT[1]}
			</Button>
		) : (
			<Button main onClick={nextStep}>
				{BUTTON_TEXT[step]}
			</Button>
		)
	const step_container = [
		{ title: 'select web style', component: <CardsWrapper>{genCards()}</CardsWrapper> },
		{ title: 'select template', component: <SelectTemplate /> },
	]
	return (
		<Background>
			<SelectStyleWrapper>
				<Title>{step_container[step].title}</Title>
				{step_container[step].component}
				<ButtonContainer>
					{step !== 0 && <Button onClick={prevStep}>Back</Button>}
					{genButton()}
				</ButtonContainer>
			</SelectStyleWrapper>
		</Background>
	)
}
export default WebStyle
