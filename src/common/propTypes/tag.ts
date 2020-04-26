import { ChangeEvent } from 'react'

export interface IInputTypes {
	value: string | number
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	readOnly?: boolean
}
