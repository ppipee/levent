import React, { useState, ChangeEvent, useEffect, useCallback } from 'react'
import { SearchableSelect } from '@dccs/react-searchable-select-mui'

import RangeArray from 'common/RangeArray'
import twoDigiFormat from 'common/twoDigiFormat'
import { TimeWrapper, MaterialOverride } from './style'

const HOURS = RangeArray(0, 24)
const MINUTES = RangeArray(0, 60)

interface PropTypes {
	setTime: (value: string, data_key: string) => void
	value: string
	type: string
}

const timeFormat = (time: number[]) =>
	time.map(number => {
		const time = twoDigiFormat(number)
		return { name: time, value: time }
	})
const TimeSelector = ({ setTime, value, type }: PropTypes) => {
	const [hour, minute] = value ? value.split(':') : [null, null]
	const [timeState, setTimeState] = useState({ hour, minute })

	const handleChange = (e: ChangeEvent<{ name?: string; value: unknown }>, type: string) => {
		setTimeState({ ...timeState, [type]: e.target.value })
	}

	useEffect(() => {
		const timeFormat = `${timeState.hour}:${timeState.minute}`
		setTime(timeFormat, type)
	}, [timeState])

	return (
		<TimeWrapper>
			<MaterialOverride>
				<SearchableSelect
					label="Hours"
					value={timeState.hour}
					onChange={e => {
						handleChange(e, 'hour')
					}}
					options={timeFormat(HOURS)}
					showAll={true}
					keyPropFn={(option: any) => option.name}
					valuePropFn={(option: any) => option.value}
				/>
			</MaterialOverride>
			<MaterialOverride>
				<SearchableSelect
					label="Minutes"
					value={timeState.minute}
					onChange={e => {
						handleChange(e, 'minute')
					}}
					options={timeFormat(MINUTES)}
					showAll={true}
					keyPropFn={(option: any) => option.name}
					valuePropFn={(option: any) => option.value}
				/>
			</MaterialOverride>
		</TimeWrapper>
	)
}
export default TimeSelector
