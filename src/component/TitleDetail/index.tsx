import React from 'react'
import { Line } from 'component/DetailBoard/style'
import { Title } from './style'
import { IInputTypes } from 'common/type'

interface PropTypes extends IInputTypes {
	// index: number
}

const TitleDetail = ({ value, readOnly = false, onChange }: PropTypes) => {
	return (
		<div>
			<Title value={value} readOnly={readOnly} onChange={onChange} />
			<Line />
		</div>
	)
}
export default TitleDetail
