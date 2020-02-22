import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Home, Signin, Signup, Dashboard } from 'pages'
import history from 'common/history'
import { NavBar } from 'component'

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/login" component={Signin} />
				<NavBar>
					<Route exact path="/" component={Home} />
					<Route path="/register" component={Signup} />
					<Route path="/dashboard" component={Dashboard} />
				</NavBar>
			</Switch>
		</Router>
	)
}
export default Routes
