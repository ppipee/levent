import React from 'react'
import { WebToolsWrapper, WebToolsTitle, WebToolsInput } from 'common/toolsStyle'
import { IInputTypes } from 'common/type'
import { AboutInput } from './style'
import { TextareaAutosize } from '@material-ui/core'

const About = ({ title = 'About', value, onChange, readOnly = false }: IInputTypes & { title?: string | number }) => {
	return (
		<WebToolsWrapper>
			<WebToolsTitle>
				<WebToolsInput data-key="about-title" value={title} onChange={onChange} readOnly={readOnly} />
			</WebToolsTitle>
			<AboutInput>
				<TextareaAutosize data-key="about-text" value={value} onChange={onChange} readOnly={readOnly} />
			</AboutInput>
		</WebToolsWrapper>
	)
}
export default About
