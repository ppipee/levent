import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Home, Signin, Signup, Dashboard, JoinEvent, FavouriteEvent, OrganizeEvent, Notification } from 'pages'
import history from 'common/history'
import { NavBar, SideBar } from 'component'

const NavRoute = ({ exact, path, component: Component }: { exact?: boolean; path: string; component: any }) => (
	<Route
		exact={exact}
		path={path}
		render={(props: any) => (
			<NavBar>
				<Component {...props} />
			</NavBar>
		)}
	/>
)

const SideRoute = ({ exact, path, component: Component }: { exact?: boolean; path: string; component: any }) => (
	<Route
		exact={exact}
		path={path}
		render={(props: Object) => (
			<NavBar>
				<SideBar>
					<Component {...props} />
				</SideBar>
			</NavBar>
		)}
	/>
)

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/login" component={Signin} />
				<Route path="/register" component={Signup} />
				<NavRoute exact path="/" component={Home} />
				<SideRoute exact path="/dashboard" component={Dashboard} />
				<SideRoute path="/dashboard/organize" component={OrganizeEvent} />
				<SideRoute path="/dashboard/join" component={JoinEvent} />
				<SideRoute path="/dashboard/favourite" component={FavouriteEvent} />
				<SideRoute path="/dashboard/notice" component={Notification} />
			</Switch>
		</Router>
	)
}
export default Routes
