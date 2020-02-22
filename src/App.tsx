import React from 'react'
import Routes from './Routes'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#6F86D6',
		},
	},
})

const App = () => (
	<ThemeProvider theme={theme}>
		<Routes />
	</ThemeProvider>
)
export default App
