import React from 'react';
import ReactDOM from 'react-dom';
import Main from './dashboard/main'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from "./theme/theme";

const title = 'Hello, world!';

ReactDOM.render(
			<ThemeProvider theme={theme}>
                <CssBaseline />
				<Main/>
			</ThemeProvider>,
	document.getElementById('app')
);
