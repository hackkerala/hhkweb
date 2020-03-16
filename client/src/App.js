import 'typeface-roboto'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import Forgot from './components/auth/Forgot'
import Header from './components/layout/Header'
import Hackathons from './components/hackathon/Hackathons'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

export default function App() {
	return (
		<Router>
			<Header />
			<main>
				{/* <Alerts /> */}
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route exact path='/forgot' component={Forgot} />
					<Route exact path='/hackathons' component={Hackathons} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
				</Switch>
			</main>
		</Router>
	)
}
