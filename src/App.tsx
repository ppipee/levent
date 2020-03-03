import React from 'react'
import Routes from './Routes'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { ContextProvider } from 'stores/index'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#6F86D6',
		},
	},
})

const App = () => (
	<ThemeProvider theme={theme}>
		<ContextProvider>
			<Routes />
		</ContextProvider>
	</ThemeProvider>
)
export default App
