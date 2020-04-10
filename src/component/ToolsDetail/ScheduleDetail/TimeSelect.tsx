import React, { ChangeEvent } from 'react'
import { TextField } from '@material-ui/core'

interface PropTypes {
	date: string
	handleDateChange: (e: ChangeEvent<HTMLInputElement>) => void
	id: string
}

const TimeSelect = ({ date, handleDateChange, id }: PropTypes) => {
	return (
		<TextField
			type="time"
			inputProps={{
				step: 300, // 5 min
			}}
			onChange={handleDateChange}
			value={date}
			id={id}
		/>
	)
}
export default TimeSelect
