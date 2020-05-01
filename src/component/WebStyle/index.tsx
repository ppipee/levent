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
import useRedux from 'common/useRedux'
import { WebEditAction as Action } from 'action'

const SELECT_TYPES = [
	{ title: 'Web Template', icon: TemplateIcon, state: 'template' },
	{ title: 'Web Customizer', icon: TemplateIcon, state: 'customizer' },
]

const BUTTON_TEXT = ['Next Step', 'Build']

const WebStyle = () => {
	const [stateStyle, setState] = useState('template')
	const [step, setStep] = useState(0)
	const [state, dispatch] = useRedux('webEdit')

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
		dispatch({ type: Action.build })
		console.log('build')
	}

	const genCards = () =>
		SELECT_TYPES.map(info => (
			<div key={`${info.title}`}>
				<TabHighLight select={stateStyle === info.state} />
				<BackgroundCard select={stateStyle === info.state} data-key={info.state} onClick={toggleState}>
					<CardWrapper>
						<div>
							<img src={info.icon} alt={`${info.state}-icon`} />
							<div>{info.title}</div>
						</div>
					</CardWrapper>
				</BackgroundCard>
			</div>
		))

	const genButton = () =>
		stateStyle === 'customizer' ? (
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
		{
			title: 'select template',
			component: <SelectTemplate />,
		},
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
