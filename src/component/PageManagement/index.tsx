import React, { ChangeEvent, Dispatch } from 'react'
import DetailBoard from 'component/DetailBoard'
import { ContentBlock, WebBlock, Title, InfoTitle, IconWrapper, InputField, InputAreaField } from './style'
import ShareIcon from 'asset/icon/share.svg'
import ViewIcon from 'asset/icon/view.svg'
import useRedux from 'common/useRedux'
import { EventInfoAction as Action } from 'action'
import { IEventInfo } from 'common/type'
import { IEventInfoAction } from 'reducer/EventInfoReducer'
import setLocation from 'action/info/setLocation'

export const PLACE_KEY = ['address', 'street', 'province', 'postcode', 'county', 'district']
const PageManagement = () => {
	const [state, dispatch] = useRedux('eventInfo') as [IEventInfo, Dispatch<IEventInfoAction>]
	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const value = e.target.value
		const type = e.target.getAttribute('data-key') as string
		if (type === 'name' || type === 'shortTeaser' || type === 'webName') {
			dispatch({ type: Action.info, info: { [type]: value } })
		} else if (PLACE_KEY.includes(type)) {
			dispatch(setLocation(state.location, value, type))
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
					<InputField value={state.location.address} data-key="address" onChange={handleChange} />
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
