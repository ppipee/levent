import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Home, Signin, Signup, Dashboard } from 'pages'
import history from 'common/history'
import { NavBar, SideBar } from 'component'

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<NavBar>
					<Route exact path="/" component={Home} />
					<Route path="/register" component={Signup} />
					<SideBar>
						<Route path="/dashboard" component={Dashboard} />
					</SideBar>
				</NavBar>
				<Route path="/login" component={Signin} />
			</Switch>
		</Router>
	)
}
export default Routes
