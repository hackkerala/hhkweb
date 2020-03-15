import 'typeface-roboto'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Header from './components/layout/Header'
import Home from './components/pages/Home'
import Login from './components/auth/Login'

export default function App() {
	return (
		<Router>
			<Header />
			<main>
				{/* <Alerts /> */}
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
				</Switch>
			</main>
		</Router>
	)
}
