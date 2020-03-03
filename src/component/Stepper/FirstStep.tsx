import React, { MouseEvent, ChangeEvent } from 'react'
import { InputWrapper, InputTitle, InputField, BorderInput, BorderInfo } from './style'

interface PropTypes {
	info: any
	setState: (event: MouseEvent<HTMLDivElement> & ChangeEvent<HTMLInputElement>) => void
}

const FirstStep = ({ info, setState }: PropTypes) => {
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
					<InputField value={info.shortTeaser} data-key="shortTeaser" onChange={setState} />
				</BorderInfo>
			</InputWrapper>
		</>
	)
}
export default FirstStep
