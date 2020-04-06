import React, { Dispatch } from 'react'
import { PageTitle, WebStyle, DefaultTemplate, ToolsBar, ToolConfig } from 'component'
import { WebEdit as Action } from 'action'
import useRedux from 'common/useRedux'
import { ContainerResponse, ContainerWrapper, WebContainer, EmptyBox } from './style'
import { ToolsType, IWebEdit } from 'common/type'
import { IWebEditAction } from 'reducer/WebEditReducer'

const Website = () => {
	const [state, dispatch] = useRedux('webEdit') as [IWebEdit, Dispatch<IWebEditAction>]

	const selectTool = (tool: ToolsType) => {
		dispatch({ type: Action.select, select: tool })
	}

	if (!state.build) return <WebStyle />
	return (
		<ContainerResponse>
			<ToolsBar selectTool={selectTool} />
			<ToolConfig />
			<ContainerWrapper>
				<WebContainer>
					<DefaultTemplate />
				</WebContainer>
				<EmptyBox />
			</ContainerWrapper>
		</ContainerResponse>
	)
}
export default Website
