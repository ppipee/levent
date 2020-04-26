import React, { ChangeEvent } from 'react'
import { InputWrapper, InputTitle, InputField, BorderInput, BorderInfo, InputAreaField } from './style'
import TimeSelector from 'component/TimeSelector'

interface PropTypes {
	info: any
	setState: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	setSubState: (value: string, data_key: string) => void
}

const FirstStep = ({ info, setState, setSubState }: PropTypes) => {
	const setLocation = (event: ChangeEvent<HTMLInputElement>) => {
		const e = event.target as HTMLInputElement
		const key = `location-${e.getAttribute('data-key')}`
		const value = e.value as string
		setSubState(value, key)
	}
	return (
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
					<InputAreaField value={info.shortTeaser} data-key="shortTeaser" onChange={setState} />
				</BorderInfo>
			</InputWrapper>
			<InputWrapper>
				<InputTitle>Location</InputTitle>
				<BorderInput active={info.location.place !== ''}>
					<InputField value={info.location.place} onChange={setLocation} data-key="place" />
				</BorderInput>
			</InputWrapper>
			<InputWrapper>
				<InputTitle>Start</InputTitle>
				<TimeSelector value={info.start.time} setTime={setSubState} type="start-time" />
			</InputWrapper>
			<InputWrapper>
				<InputTitle>End</InputTitle>
				<TimeSelector value={info.end.time} setTime={setSubState} type="end-time" />
			</InputWrapper>
		</>
	)
}
export default FirstStep
