import React from 'react'
import { Paper, ThemeProvider } from '@material-ui/core'

import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import { useStyles, theme } from './theme'

const App = () => {
	const classes = useStyles()
	return (
		<ThemeProvider theme={theme}>
			<Paper className={classes.root} elevation={0}>
				<Header />
				<Main />
			</Paper>
			<Footer />
		</ThemeProvider>
	)
}

export default App
