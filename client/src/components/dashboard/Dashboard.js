import React from 'react'
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	IconButton,
	makeStyles,
	Typography
} from '@material-ui/core'
import { Star } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
	cardFail: {
		borderLeft: '6px solid #E57373'
	},
	cardProcessing: {
		borderLeft: '6px solid #4DD0E1'
	},
	cardSuccess: {
		borderLeft: '6px solid #81C784'
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
		justifyContent: 'space-between',
		marginBottom: theme.spacing(2)
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
				Applied Hackathons
			</Typography>
			<Grid container xs={12} spacing={2} className={classes.container}>
				{[0, 1, 2, 3].map(value => (
					<Grid key={value} item xs={3}>
						<Card
							className={
								value === 0
									? classes.cardSuccess
									: value === 3
									? classes.cardFail
									: classes.cardProcessing
							}
						>
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
								{value === 0 ? (
									<Button size='small'>Next Steps</Button>
								) : value === 3 ? (
									<Button size='small'>Learn More</Button>
								) : (
									<>
										<Button size='small'>Withdraw</Button>
										<Button size='small'>Learn More</Button>
									</>
								)}
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
			<Typography variant='h4' component='h1' className={classes.heading1}>
				Attended Hackathons
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
								<div>
									{[0, 1, 2, 3, 4].map(value => (
										<IconButton key={value} aria-label='delete'>
											<Star />
										</IconButton>
									))}
								</div>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default Hackathons
