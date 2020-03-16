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

const Forgot = ({ history }) => {
	const classes = useStyles()

	const formSubmitHandler = () => history.push('/login')

	return (
		<div className={classes.root}>
			<Typography variant='h4' component='h1'>
				Reset Password
			</Typography>
			<form noValidate autoComplete='off' onSubmit={formSubmitHandler}>
				<div className={classes.textField}>
					<TextField
						label='Email Address'
						type='email'
						id='email'
						variant='outlined'
						autoFocus
						helperText='Link to reset password will be sent to this email if an account with this email is found.'
					/>
				</div>
				<div className={classes.textField}>
					<Button color='primary' type='submit' variant='contained'>
						Reset
					</Button>
				</div>
			</form>
			<Link to='/signup'>
				<Button>Create Account</Button>
			</Link>
			<Link to='/login'>
				<Button>Login</Button>
			</Link>
		</div>
	)
}

export default Forgot
