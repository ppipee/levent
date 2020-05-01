import React, { ChangeEvent } from 'react'
import { InputWrapper, InputTitle, InputField, BorderInput, BorderInfo, InputAreaField } from './style'
import TimeSelector from 'component/common/TimeSelector'
import { DateSelector } from 'component/common'

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
					<InputField value={info.name} data-key="eventName" onChange={setState} />
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
				<BorderInput active={info.location.address !== ''}>
					<InputField value={info.location.address} onChange={setLocation} data-key="address" />
				</BorderInput>
			</InputWrapper>
			<InputWrapper>
				<InputTitle>Start</InputTitle>
				<TimeSelector value={info.dateTime.startTime} setTime={setSubState} type="dateTime-startTime" />
				<DateSelector />
			</InputWrapper>
			<InputWrapper>
				<InputTitle>End</InputTitle>
				<TimeSelector value={info.dateTime.endTime} setTime={setSubState} type="ateTime-Endtime" />
				<DateSelector />
			</InputWrapper>
		</>
	)
}
export default FirstStep
