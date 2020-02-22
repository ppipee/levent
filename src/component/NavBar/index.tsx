import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { Bar, Title, SubTitle, Button, SvgCustom, EmptyBox } from './style'

const NavBar = ({ children }: any) => {
	return (
		<>
			<EmptyBox />
			<Bar>
				<Button>
					<Title>Levent</Title>
				</Button>
				<SubTitle>
					<Button>
						<div>UserName</div>
						<SvgCustom>
							<AccountCircle />
						</SvgCustom>
					</Button>
				</SubTitle>
			</Bar>
			{children}
		</>
	)
}
export default NavBar
