import WebFont from 'webfontloader'
import { createMuiTheme, makeStyles } from '@material-ui/core'
import { cyan, lightGreen } from '@material-ui/core/colors'

WebFont.load({
	custom: {
		families: ['Cascadia'],
		urls: ['./fonts.css'],
	},
})

export const useStyles = makeStyles(theme => ({
	root: {
		borderRadius: '0px',
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		padding: theme.spacing(2),
	},
}))

export const theme = createMuiTheme({
	palette: {
		primary: cyan,
		secondary: lightGreen,
	},
	typography: {
		h1: {
			fontFamily: 'Cascadia',
		},
		h3: {
			fontFamily: 'Cascadia',
		},
	},
})
