import React, { ReactNode } from 'react'
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
	SideBarEmpty,
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

const setting_event = [{ route: '/dashboard', name: 'Dashboard' }, ...setting]

interface Routes {
	route: string
	name: string
}

const username = 'ppipee'

const SideBar = ({ children }: { children: ReactNode }) => {
	const current_path = history.location.pathname
	const id = current_path.split('/')[3]
	const routes_event = [
		{ route: `/dashboard/organize/${id}`, name: 'Overview' },
		{ route: `/dashboard/organize/${id}/website`, name: 'Website' },
		{ route: `/dashboard/organize/${id}/tools`, name: 'Tools' },
		{ route: `/dashboard/organize/${id}/services`, name: 'Service Management' },
		{ route: `/dashboard/organize/${id}/registration`, name: 'Registration' },
		{ route: `/dashboard/organize/${id}/ticket`, name: 'Ticket' },
	]

	const get_path =
		current_path.split('/')[2] === 'organize' && current_path.split('/').length > 3
			? { routes: routes_event, setting: setting_event }
			: { routes, setting }
	const genTab = () =>
		get_path.routes.map((data: Routes) => {
			const check_current = data.route === current_path
			return (
				<TabWrapper key={`route-${data.name}`} active={check_current ? true : false}>
					<Link to={data.route}>
						<Tab active={check_current ? true : false}>{data.name}</Tab>
					</Link>
				</TabWrapper>
			)
		})

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
						{get_path.setting.map(data => (
							<Link to={data.route} key={`route-${data.name}`}>
								<ControlContent>{data.name}</ControlContent>
							</Link>
						))}
					</Control>
				</ControlWrapper>
			</Bar>
			<SideBarEmpty />
			<ContentWrapper>{children}</ContentWrapper>
		</SideBarWrapper>
	)
}
export default SideBar
