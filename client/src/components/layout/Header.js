import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	title: {
		flexGrow: 1
	}
}))

const Header = () => {
	const classes = useStyles()

	return (
		<AppBar position='fixed'>
			<Toolbar>
				<Typography variant='h6' className={classes.title}>
					HHK
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header
