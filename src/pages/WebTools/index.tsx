import React, { Dispatch } from 'react'
import { PageTitle, WindowTabs } from 'component'
import useRedux from 'common/useRedux'
import { IWebToolState, IWebToolsAction } from 'reducer/WebToolsReducer'

const WebTools = () => {
	const [tools, setTools] = useRedux('webTools') as [IWebToolState, Dispatch<IWebToolsAction>]
	return (
		<div>
			<PageTitle>Tools</PageTitle>
			<WindowTabs tools={tools} setTools={setTools} />
		</div>
	)
}
export default WebTools
