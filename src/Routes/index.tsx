import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import {
	Home,
	Signin,
	Signup,
	Dashboard,
	JoinEvent,
	FavouriteEvent,
	OrganizeEvent,
	Notification,
	OverviewEvent,
} from 'pages'
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

const path = [
	'/login',
	'/register',
	'/dashboard',
	'/dashboard/join',
	'/dashboard/favourite',
	'/dashboard/notice',
	'/dashboard/organize',
	'/dashboard/organize/:id',
	'/dashboard/organize/:id/website',
	'/dashboard/organize/:id/service',
	'/dashboard/organize/:id/registration',
	'/dashboard/organize/:id/ticket',
]

const redirectPath = (paths: string[]) =>
	paths.map(path => <Redirect key={`redirect-${path}`} strict exact from={path + '/'} to={path} />)

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				{redirectPath(path)}
				<Route path="/login" component={Signin} />
				<Route path="/register" component={Signup} />
				<NavRoute exact path="/" component={Home} />
				<SideRoute exact path="/dashboard" component={Dashboard} />
				<SideRoute exact path="/dashboard/organize" component={OrganizeEvent} />
				<SideRoute path="/dashboard/organize/:id" component={OverviewEvent} />
				<SideRoute path="/dashboard/join" component={JoinEvent} />
				<SideRoute path="/dashboard/favourite" component={FavouriteEvent} />
				<SideRoute path="/dashboard/notice" component={Notification} />
			</Switch>
		</Router>
	)
}
export default Routes
