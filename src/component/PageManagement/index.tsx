import React, { ChangeEvent } from 'react'
import DetailBoard from 'component/DetailBoard'
import { ContentBlock, WebBlock, Title, InfoTitle, IconWrapper, InputField, InputAreaField } from './style'
import ShareIcon from 'asset/icon/share.svg'
import ViewIcon from 'asset/icon/view.svg'
import useRedux from 'common/useRedux'
import { EventInfoAction as Action } from 'action'

const PageManagement = () => {
	const [state, dispatch] = useRedux('eventInfo')
	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const value = e.target.value
		const type = e.target.getAttribute('data-key')
		if (type === 'name' || type === 'shortTeaser') {
			dispatch({ type: Action.info, info: { [type]: value } })
		}
	}

	return (
		<DetailBoard>
			<div>Page Management</div>
			<div>
				<Title>Website</Title>
				<ContentBlock>
					<WebBlock value={state.webName} data-key="webName" onChange={handleChange} />
					<IconWrapper>
						<img src={ViewIcon} alt="view-icon" />
					</IconWrapper>
					<IconWrapper>
						<img src={ShareIcon} alt="share-icon" />
					</IconWrapper>
				</ContentBlock>
			</div>
			<div>
				<Title>General Info</Title>
				<ContentBlock>
					<InfoTitle>{'Event Name 		:'}</InfoTitle>
					<InputField value={state.eventName} data-key="name" onChange={handleChange} />
				</ContentBlock>
				<ContentBlock>
					<InfoTitle>{'Location	 		:'}</InfoTitle>
					<InputField />
				</ContentBlock>
				<ContentBlock>
					<InfoTitle>{'Start Date 		:'}</InfoTitle>
					<InputField />
				</ContentBlock>
				<ContentBlock>
					<InfoTitle>{'End Date	 		:'}</InfoTitle>
					<InputField />
				</ContentBlock>
				<ContentBlock>
					<InfoTitle start>{'Short Teaser 		:'}</InfoTitle>
					<InputAreaField value={state.shortTeaser} data-key="shortTeaser" onChange={handleChange} rows={5} />
				</ContentBlock>
			</div>
		</DetailBoard>
	)
}
export default PageManagement
