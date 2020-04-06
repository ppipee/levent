import React from 'react'
import { ToolInfo, ToolName } from './style'
import { ToolsType } from 'common/type'

interface PropTypes {
	name: ToolsType
}

const Info = ({ name }: PropTypes) => {
	return (
		<ToolInfo>
			<ToolName>{name}</ToolName>
		</ToolInfo>
	)
}
export default Info
