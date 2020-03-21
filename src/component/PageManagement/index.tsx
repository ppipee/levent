import React, { ChangeEvent } from 'react'
import DetailBoard from 'component/DetailBoard'
import { ContentBlock, WebBlock, Title, InfoTitle, IconWrapper, InputField, InputAreaField } from './style'
import ShareIcon from 'asset/icon/share.svg'
import ViewIcon from 'asset/icon/view.svg'
import useRedux from 'common/useRedux'
import { EventInfoAction as Action } from 'action'

const PageManagement = () => {
	const [state, dispatch] = useRedux('eventInfo')
	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
		const value = e.target.value
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
					<WebBlock value="levent.com" />
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
					<InputField value={state.name} onChange={e => handleChange(e, 'name')} />
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
					<InfoTitle>{'End Date 		:'}</InfoTitle>
					<InputField />
				</ContentBlock>
				<ContentBlock>
					<InfoTitle>{'Short Teaser 		:'}</InfoTitle>
					<InputAreaField value={state.shortTeaser} onChange={e => handleChange(e, 'shortTeaser')} rows={5} />
				</ContentBlock>
			</div>
		</DetailBoard>
	)
}
export default PageManagement
