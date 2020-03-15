import React from 'react'
import { Button, TextField, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		alignSelf: 'center',
		textAlign: 'center'
	},
	textField: {
		margin: 12
	}
}))

const Login = ({ history }) => {
	const classes = useStyles()

	const formSubmitHandler = () => history.push('/')

	return (
		<div className={classes.root}>
			<Typography variant='h4' component='h1'>
				Login
			</Typography>
			<form noValidate autoComplete='off' onSubmit={formSubmitHandler}>
				<div className={classes.textField}>
					<TextField label='Username' id='username' variant='outlined' />
				</div>
				<div className={classes.textField}>
					<TextField
						label='Password'
						type='password'
						id='password'
						variant='outlined'
					/>
				</div>
				<div className={classes.textField}>
					<Button color='primary' type='submit' variant='contained'>
						Login
					</Button>
				</div>
			</form>
		</div>
	)
}

export default Login
