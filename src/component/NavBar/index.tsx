import React from 'react'
import { Bar, Title, SubTitle, Button, EmptyBox, ImgIcon } from './style'
import { Link } from 'react-router-dom'
import AccountIcon from 'asset/icon/nav/account.svg'

const NavBar = ({ children }: any) => {
	return (
		<>
			<EmptyBox />
			<Bar>
				<Title>
					<Link to="/">
						<Button>Levent</Button>
					</Link>
				</Title>
				<SubTitle fontStyle={false}>
					<Link to="/dashboard">
						<Button>
							<ImgIcon src={AccountIcon} alt="menu-account" />
							<div>ppipee</div>
						</Button>
					</Link>
				</SubTitle>
			</Bar>
			{children}
		</>
	)
}
export default NavBar
