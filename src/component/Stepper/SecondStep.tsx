import React, { MouseEvent, ChangeEvent } from 'react'
import { CardToolsWrapper, CardToolsBorder, CardToolsContent, CheckButton, CardToolsTitle, ToolIcon } from './style'

import ScheduleIcon from 'asset/icon/schedule.svg'
import RegistrationIcon from 'asset/icon/registration.svg'
import MapIcon from 'asset/icon/map.svg'
import RouteIcon from 'asset/icon/route.svg'
import GalleryIcon from 'asset/icon/gallery.svg'
import TicketIcon from 'asset/icon/ticket.svg'
import SponserIcon from 'asset/icon/sponser1.svg'
import FollowIcon from 'asset/icon/follower.svg'
import CheckIcon from 'asset/icon/check.svg'

interface PropTypes {
	tools: any
	setState: (event: MouseEvent<HTMLDivElement>) => void
}

const WEBTOOLS = [
	{ name: 'schedule', icon: ScheduleIcon },
	{ name: 'registration', icon: RegistrationIcon },
	{ name: 'map', icon: MapIcon },
	{ name: 'route', icon: RouteIcon },
	{ name: 'gallery', icon: GalleryIcon },
	{ name: 'ticket', icon: TicketIcon },
	{ name: 'sponser', icon: SponserIcon },
	{ name: 'social follow', icon: FollowIcon, dataKey: 'socialFollow' },
]

const SecondStep = ({ tools, setState }: PropTypes) => (
	<CardToolsWrapper>
		{WEBTOOLS.map(tool => {
			const key = tool.dataKey ? tool.dataKey : tool.name
			return (
				<CardToolsBorder active={tools[key]} key={`step-${tool.name}`}>
					<CardToolsContent>
						<ToolIcon>
							<img src={tool.icon} alt={`${tool.name}-icon`} />
						</ToolIcon>
						<CardToolsTitle>{tool.name}</CardToolsTitle>
						{tools[key] ? (
							<CheckButton onClick={setState} data-key={key} value={true}>
								<img src={CheckIcon} alt="check-icon" />
							</CheckButton>
						) : (
							<CheckButton onClick={setState} data-key={key} value={false} />
						)}
					</CardToolsContent>
				</CardToolsBorder>
			)
		})}
	</CardToolsWrapper>
)

export default SecondStep
