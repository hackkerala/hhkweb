import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const Footer = () => {
	const localClasses = useLocalStyles()
	return (
		<footer className={localClasses.root}>
			<Typography component='h3' variant='body1'>
				Developed by{' '}
				<a
					className={localClasses.link}
					href='https://github.com/hhkerala/'
					rel='noopener noreferrer'
					target='_blank'
				>
					HHKerala
				</a>
			</Typography>
		</footer>
	)
}

const useLocalStyles = makeStyles(theme => ({
	link: {
		color: 'inherit',
	},
	root: {
		background: grey[900],
		color: grey[100],
		padding: theme.spacing(3),
		textAlign: 'center',
	},
}))

export default Footer
