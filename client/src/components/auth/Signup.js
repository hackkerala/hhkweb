import React from 'react'
import { Button, TextField, Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
	root: {
		alignSelf: 'center',
		textAlign: 'center'
	},
	textField: {
		margin: 12
	}
}))

const Signup = ({ history }) => {
	const classes = useStyles()

	const formSubmitHandler = () => history.push('/')

	return (
		<div className={classes.root}>
			<Typography variant='h4' component='h1'>
				Signup
			</Typography>
			<form noValidate autoComplete='off' onSubmit={formSubmitHandler}>
				<div className={classes.textField}>
					<TextField
						label='First Name'
						id='firstName'
						variant='outlined'
						autoFocus
					/>{' '}
					<TextField label='Last Name' id='lastName' variant='outlined' />
				</div>
				<div className={classes.textField}>
					<TextField
						label='Email Address'
						type='email'
						id='email'
						variant='outlined'
					/>{' '}
					<TextField label='Username' id='username' variant='outlined' />
				</div>
				<div className={classes.textField}>
					<TextField
						label='Password'
						type='password'
						id='password'
						variant='outlined'
					/>{' '}
					<TextField
						label='Confirm Password'
						type='password'
						id='confirmPassword'
						variant='outlined'
					/>
				</div>
				<div className={classes.textField}>
					<Button color='primary' type='submit' variant='contained'>
						Signup
					</Button>
				</div>
			</form>
			<Link to='/login'>
				<Button>Login to existing account</Button>
			</Link>
		</div>
	)
}

export default Signup
