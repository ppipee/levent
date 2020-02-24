import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { Bar, Title, SubTitle, Button, SvgCustom, EmptyBox } from './style'
import { Link } from 'react-router-dom'

const NavBar = ({ children }: any) => {
	return (
		<>
			<EmptyBox />
			<Bar>
				<Link to="/">
					<Button>
						<Title>Levent</Title>
					</Button>
				</Link>
				<SubTitle>
					<Link to="/dashboard">
						<Button>
							<div>ppipee</div>
							<SvgCustom>
								<AccountCircle />
							</SvgCustom>
						</Button>
					</Link>
				</SubTitle>
			</Bar>
			{children}
		</>
	)
}
export default NavBar
