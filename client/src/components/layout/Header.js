import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { ArrowDownward } from '@material-ui/icons'

import pic from '../../header.svg'

const Header = () => {
	const localClasses = useLocalStyles()
	return (
		<header className={localClasses.root}>
			<div className={localClasses.picContainer}>
				<img alt='A person coding' src={pic} className={localClasses.pic} />
			</div>
			<div className={localClasses.title}>
				<Typography className={localClasses.heading} variant='h1'>
					Hackathon
					<br />
					Hackers
					<br />
					Kerala
				</Typography>
			</div>
			<div className={localClasses.subtitle}>
				<Typography
					className={localClasses.subtitleText}
					component='p'
					variant='h5'
				>
					Supporting Hackathons in Kerala
				</Typography>
				<Typography
					className={localClasses.link}
					component='a'
					onClick={() =>
						document.querySelector('main').scrollIntoView({
							behavior: 'smooth',
						})
					}
				>
					Sponsor List
					<br />
					<ArrowDownward></ArrowDownward>
				</Typography>
			</div>
		</header>
	)
}

const useLocalStyles = makeStyles(theme => ({
	heading: {
		fontSize: theme.typography.h2.fontSize,
		zIndex: 1,
		[theme.breakpoints.up('md')]: {
			fontSize: theme.typography.h1.fontSize,
		},
	},
	link: {
		color: theme.palette.secondary.dark,
		textDecoration: 'none',
	},
	pic: {
		maxWidth: 360,
		width: '100%',
	},
	picContainer: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		display: 'flex',
		flex: 1,
		gridArea: 'pic',
	},
	root: {
		display: 'grid',
		gap: '0px ' + theme.spacing(2) + 'px',
		gridTemplateAreas: '"title" "subtitle" "pic"',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '1fr 0.6fr 0.4fr',
		height: '100%',
		width: '100%',
		[theme.breakpoints.up('md')]: {
			gridTemplateAreas: '"pic title" "pic subtitle"',
			gridTemplateColumns: '0.8fr 1.2fr',
			gridTemplateRows: '1.5fr 0.5fr',
		},
	},
	subtitle: { gridArea: 'subtitle' },
	subtitleText: {
		paddingBottom: theme.spacing(3),
		position: 'relative',
		zIndex: 1,
	},
	title: {
		alignItems: 'flex-end',
		display: 'flex',
		gridArea: 'title',
	},
}))

export default Header
