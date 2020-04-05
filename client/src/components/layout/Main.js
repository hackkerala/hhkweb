import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

import data from '../../sponsors.json'
import Sponsor from '../sponsor/Sponsor'

const Main = () => {
	const localClasses = useLocalStyles()
	return (
		<main className={localClasses.root}>
			<Typography component='h2' variant='h3'>
				Sponsors List
			</Typography>
			<div className={localClasses.sponsors}>
				{data.map(sponsor => (
					<Sponsor info={sponsor} />
				))}
			</div>
		</main>
	)
}

const useLocalStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(12) + 'px 0px',
		textAlign: 'center',
	},
	sponsors: {
		marginTop: theme.spacing(4),
	},
}))

export default Main
