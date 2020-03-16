import React from 'react'
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	makeStyles,
	Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	card: {
		padding: theme.spacing(2)
	},
	container: {
		marginBottom: theme.spacing(12)
	},
	heading1: {
		margin: theme.spacing(3) + 'px 0px'
	},
	image: {
		background: '#d8d8d8',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: 180
	},
	info: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	root: {
		flex: 1,
		padding: 24
	}
}))

const Hackathons = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography variant='h4' component='h1' className={classes.heading1}>
				Upcoming Hackathons
			</Typography>
			<Grid container xs={12} spacing={2} className={classes.container}>
				{[0, 1, 2, 3].map(value => (
					<Grid key={value} item xs={3}>
						<Card className={classes.paper}>
							<CardContent>
								<Typography
									color='textSecondary'
									variant='h5'
									component='h2'
									gutterBottom
								>
									Hackathon {value + 1}
								</Typography>
								<Grid container xs={12} className={classes.image}></Grid>
								<div className={classes.info}>
									<Typography color='textSecondary' display='inline'>
										Some date
									</Typography>
									<Typography color='textSecondary' display='inline'>
										N days event
									</Typography>
								</div>
							</CardContent>
							<CardActions>
								<Button size='small'>Register</Button>
								<Button size='small'>Learn More</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
			<Typography variant='h4' component='h1' className={classes.heading1}>
				Recent Hackathons
			</Typography>
			<Grid container xs={12} spacing={2} className={classes.container}>
				{[0, 1, 2, 3].map(value => (
					<Grid key={value} item xs={3}>
						<Card className={classes.paper}>
							<CardContent>
								<Typography
									color='textSecondary'
									variant='h5'
									component='h2'
									gutterBottom
								>
									Hackathon {value + 1}
								</Typography>
								<Grid container xs={12} className={classes.image}></Grid>
								<div className={classes.info}>
									<Typography color='textSecondary' display='inline'>
										Some date
									</Typography>
									<Typography color='textSecondary' display='inline'>
										N days event
									</Typography>
								</div>
							</CardContent>
							<CardActions>
								<Button size='small'>Register</Button>
								<Button size='small'>Learn More</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default Hackathons
