import React, { Dispatch } from 'react'
import { PositionWrapper, ToolConfigWrapper, ToolInfo, ToolName } from './style'
import Info from './ToolInfo'
import useRedux from 'common/useRedux'
import { WebEdit as Action } from 'action'
import { IWebEdit } from 'common/type'
import { IWebEditAction } from 'reducer/WebEditReducer'

const ToolConfig = () => {
	const [state, dispatch] = useRedux('webEdit') as [IWebEdit, Dispatch<IWebEditAction>]
	return (
		<PositionWrapper>
			<ToolConfigWrapper>
				<Info name={state.selectedTool} />
			</ToolConfigWrapper>
		</PositionWrapper>
	)
}
export default ToolConfig
