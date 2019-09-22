import React from 'react';
import ReactDOM from 'react-dom';
import Main from './dashboard/main'
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import theme from "./theme/theme";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./dashboard/login";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
            <Switch>
                <Route path='/wizard' component={Main}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </Router>
    </ThemeProvider>,
    document.getElementById('app')
);
