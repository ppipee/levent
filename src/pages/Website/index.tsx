import React from 'react'
import { PageTitle, WebStyle, DefaultTemplate } from 'component'
import { WebEdit as Action } from 'action'
import useRedux from 'common/useRedux'

const Website = () => {
	const [state, dispatch] = useRedux('webEdit')
	return (
		<div>
			{!state.build && <WebStyle />}
			{state.build && <DefaultTemplate />}
		</div>
	)
}
export default Website
