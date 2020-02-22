import React, { useState } from 'react'
import {
	SideBarWrapper,
	Bar,
	TabWrapper,
	Tab,
	ContentWrapper,
	Heading,
	Control,
	ControlWrapper,
	ControlContent,
} from './style'
import { Link } from 'react-router-dom'
import history from 'common/history'
import AccountCircle from '@material-ui/icons/AccountCircle'

const routes = [
	{ route: '/dashboard', name: 'Dashboard' },
	{ route: '/dashboard/join', name: 'Join Event' },
	{ route: '/dashboard/favourite', name: 'Favourite Event' },
	{ route: '/dashboard/organize', name: 'Organize Event' },
	{ route: '/dashboard/notice', name: 'Notification' },
]

const setting = [
	{ route: '/setting', name: 'Setting' },
	{ route: '/logout', name: 'Log out' },
]

interface Routes {
	route: string
	name: string
}

const username = 'ppipee'

const SideBar = ({ children }: any) => {
	const current_path = history.location.pathname
	const [path, setPath] = useState(current_path)

	if (children) {
		const genTab = () =>
			routes.map((data: Routes) => (
				<TabWrapper
					key={`route-${data.name}`}
					active={data.route === path ? true : false}
					onClick={() => {
						setPath(data.route)
					}}
				>
					<Link to={data.route}>
						<Tab active={data.route === path ? true : false}>{data.name}</Tab>
					</Link>
				</TabWrapper>
			))
		return (
			<SideBarWrapper>
				<Bar>
					<Heading>
						<AccountCircle />
						<div>{username}</div>
					</Heading>
					{genTab()}
					<ControlWrapper>
						<Control>
							{setting.map(data => (
								<Link to={data.route}>
									<ControlContent>{data.name}</ControlContent>
								</Link>
							))}
						</Control>
					</ControlWrapper>
				</Bar>
				<ContentWrapper>{children}</ContentWrapper>
			</SideBarWrapper>
		)
	}
	return <></>
}
export default SideBar
