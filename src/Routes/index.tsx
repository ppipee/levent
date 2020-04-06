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
	Ticket,
	Registration,
	Service,
	Website,
	WebTools,
} from 'pages'
import history from 'common/history'
import { NavBar, SideBar, NavBarEvent } from 'component'

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
	'/dashboard/organize/:id/tools',
	'/dashboard/organize/:id/services',
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
				<SideRoute path="/dashboard/join" component={JoinEvent} />
				<SideRoute path="/dashboard/favourite" component={FavouriteEvent} />
				<SideRoute path="/dashboard/notice" component={Notification} />
				<SideRoute exact path="/dashboard/organize" component={OrganizeEvent} />
				<SideRoute exact path="/dashboard/organize/:id" component={OverviewEvent} />
				<Route
					exact
					path="/dashboard/organize/:id/website"
					render={() => (
						<NavBarEvent>
							<Website />
						</NavBarEvent>
					)}
				/>
				<SideRoute path="/dashboard/organize/:id/tools" component={WebTools} />
				<SideRoute path="/dashboard/organize/:id/services" component={Service} />
				<SideRoute path="/dashboard/organize/:id/registration" component={Registration} />
				<SideRoute path="/dashboard/organize/:id/ticket" component={Ticket} />
			</Switch>
		</Router>
	)
}
export default Routes
