import React from 'react'
import { PageTitle, WebStyle, DefaultTemplate, ToolsBar } from 'component'
import { WebEdit as Action } from 'action'
import useRedux from 'common/useRedux'

const Website = () => {
	const [state, dispatch] = useRedux('webEdit')
	if (!state.build) return <WebStyle />
	return (
		<div>
			<ToolsBar />
			<DefaultTemplate />
		</div>
	)
}
export default Website
