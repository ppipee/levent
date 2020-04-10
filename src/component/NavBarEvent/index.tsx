import React from 'react'
import { Bar, MenuWrapper, SubTitle, Button, ImgIcon, EmptyBox } from '../NavBar/style'
import { Link } from 'react-router-dom'
import SaveIcon from 'asset/icon/nav/save.svg'
import DeployIcon from 'asset/icon/nav/deploy.svg'
import EventIcon from 'asset/icon/nav/event.svg'
import ArrowBack from 'asset/icon/nav/arrow-three-line.svg'
import AccountIcon from 'asset/icon/nav/account.svg'
import WebsiteIcon from 'asset/icon/nav/website.svg'
import history from 'common/history'

const MenuLeft = [
	{
		text: '',
		function: () => {
			history.goBack()
		},
		icon: ArrowBack,
	},
	{
		text: 'website',
		function: () => {
			console.log('website')
		},
		icon: WebsiteIcon,
	},
	{
		text: 'deploy',
		function: () => {
			console.log('deploy')
		},
		icon: DeployIcon,
	},
	{
		text: 'save',
		function: () => {
			console.log('deploy')
		},
		icon: SaveIcon,
	},
]
const NavBarEvent = ({ children }: any) => {
	const url = history.location.pathname.split('/')
	const id = url[url.length - 2]
	const username = 'ppipee'
	const MenuRight = [
		{
			text: 'event',
			link: `/dashboard/organize/${id}`,
			icon: EventIcon,
		},
		{
			text: username,
			link: '/dashboard',
			icon: AccountIcon,
		},
	]

	return (
		<>
			<EmptyBox />
			<Bar>
				<MenuWrapper>
					{MenuLeft.map(menu => (
						<SubTitle key={`menu-bar-${menu.text}`} fontStyle>
							<Button onClick={menu.function}>
								<ImgIcon src={menu.icon} alt={`menu-${menu.text}`} />
								<div>{menu.text}</div>
							</Button>
						</SubTitle>
					))}
				</MenuWrapper>
				<MenuWrapper>
					{MenuRight.map(menu => (
						<SubTitle key={`menu-bar-${menu.text}`} fontStyle={menu.link !== '/dashboard'}>
							<Link to={menu.link}>
								<Button>
									<ImgIcon src={menu.icon} alt={`menu-${menu.text}`} />
									<div>{menu.text}</div>
								</Button>
							</Link>
						</SubTitle>
					))}
				</MenuWrapper>
			</Bar>
			{children}
		</>
	)
}
export default NavBarEvent
