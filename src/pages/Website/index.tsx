import React from 'react'
import { PageTitle, WebStyle, DefaultTemplate } from 'component'
import { WebEdit as Action } from 'action'
import useRedux from 'common/useRedux'

const Website = () => {
	const [state, dispatch] = useRedux('webEdit')
	return (
		<div>
			<PageTitle>Website</PageTitle>
			{!state.build && <WebStyle />}
			{state.build && <DefaultTemplate />}
		</div>
	)
}
export default Website
