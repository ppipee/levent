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

interface Routes {
	route: string
	name: string
}

const username = 'ppipee'

const SideBar = ({ children }: { children: ReactNode }) => {
	const current_path = history.location.pathname
	const genTab = () =>
		routes.map((data: Routes) => {
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
						{setting.map(data => (
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
	// }
	// return <></>
}
export default SideBar
