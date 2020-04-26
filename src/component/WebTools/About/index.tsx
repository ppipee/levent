import React from 'react'
import { WebToolsWrapper, WebToolsTitle, WebToolsInput, WebToolsTextArea } from 'common/toolsStyle'
import { IInputTypes } from 'common/propTypes/tag'
import { TextareaAutosize } from '@material-ui/core'

const About = ({ title = 'About', value, onChange, readOnly = false }: IInputTypes & { title?: string | number }) => {
	return (
		<WebToolsWrapper>
			<WebToolsTitle>
				<WebToolsInput data-key="about-title" value={title} onChange={onChange} readOnly={readOnly} />
			</WebToolsTitle>
			<WebToolsTextArea>
				<TextareaAutosize
					placeholder="Enter event detail"
					data-key="shortTeaser"
					value={value}
					onChange={onChange}
					readOnly={readOnly}
				/>
			</WebToolsTextArea>
		</WebToolsWrapper>
	)
}
export default About
