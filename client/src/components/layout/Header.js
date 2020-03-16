import React from 'react'
import {
	AppBar,
	Button,
	makeStyles,
	Toolbar,
	Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
	links: {
		color: theme.palette.primary.contrastText,
		textTransform: 'none'
	},
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
				<Link to='/'>
					<Button className={classes.links}>Dashboard</Button>
				</Link>
				<Link to='/hackathons'>
					<Button className={classes.links}>Hackathons</Button>
				</Link>
				<Link to='/login'>
					<Button className={classes.links}>Login</Button>
				</Link>
			</Toolbar>
		</AppBar>
	)
}

export default Header
