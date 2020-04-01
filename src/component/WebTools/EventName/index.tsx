import React, { ChangeEvent } from 'react'
import { EventTitle } from './style'
import { IInputTypes } from 'common/type'
import { WebToolsWrapper } from 'common/toolsStyle'
import { TextareaAutosize } from '@material-ui/core'

const EventName = ({ value, onChange, readOnly = false }: IInputTypes) => {
	return (
		<WebToolsWrapper>
			<EventTitle>
				<TextareaAutosize value={value} onChange={onChange} readOnly={readOnly} />
			</EventTitle>
		</WebToolsWrapper>
	)
}
export default EventName
