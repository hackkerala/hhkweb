import React from 'react'
import { Button, makeStyles, Paper, Typography } from '@material-ui/core'
import { Link, Mail } from '@material-ui/icons'

const Sponsor = ({ info: { name, contacts } }) => {
	const localClasses = useLocalClaseses()
	return (
		<Paper className={localClasses.card} elevation={2}>
			<Typography component='h4' variant='h5'>
				{name}
			</Typography>
			{contacts.map(({ content, type }) => (
				<a
					href={type === 'mail' ? 'mailto:' + content : content}
					rel='noopener noreferrer'
					target='_blank'
				>
					<Button color='primary'>
						{type === 'link' ? <Link /> : <Mail />}
					</Button>
				</a>
			))}
		</Paper>
	)
}

const useLocalClaseses = makeStyles(theme => ({
	card: {
		display: 'inline-block',
		margin: theme.spacing(2),
		maxWidth: 360,
		minWidth: 120,
		padding: theme.spacing(1),
		width: 'calc(100% - 2 * ' + theme.spacing(3) + 'px)',
	},
}))

export default Sponsor
