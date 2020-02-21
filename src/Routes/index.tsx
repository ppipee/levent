import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Home, Signin, Signup } from 'pages'
import history from 'common/history'

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/dashboard" component={Home} />
				<Route path="/login" component={Signin} />
				<Route path="/register" component={Signup} />
			</Switch>
		</Router>
	)
}
export default Routes
