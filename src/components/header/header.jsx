import React from 'react';
import './header.css';
import Box from "@material-ui/core/Box/Box";
import User from "../../resources/img/user.jpg"
import Button from "@material-ui/core/Button/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const Header = () => {
    const classes = useStyles();

    function logout() {
        localStorage.clear();
        window.location = '/login';
    }

    return (
        <div className="header">
            <Box fontSize="h6.fontSize">
                <div className="prod-name">Hooligans Production</div>
            </Box>
            <div className="user-info">
                <div className="user-name">Maxim Maslov</div>
                <img className="user-photo" src={User}/>
                <div className="logout-button"
                    onClick={() => logout()}
                >
                    Logout
                </div>
            </div>
        </div>
    );
};

export default Header;