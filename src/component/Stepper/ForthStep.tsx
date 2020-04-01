import React, { ChangeEvent } from 'react'
import { InputWrapper, InputField, BorderInput } from './style'

interface PropTypes {
	info: any
	setState: (event: ChangeEvent<HTMLInputElement>) => void
}

const ForthStep = ({ info, setState }: PropTypes) => {
	return (
		<>
			<InputWrapper>
				{/* <InputTitle>Web Name</InputTitle> */}
				<BorderInput active={info.webName !== ''}>
					<InputField value={info.webName} data-key="webName" onChange={setState} />
				</BorderInput>
			</InputWrapper>
		</>
	)
}
export default ForthStep
