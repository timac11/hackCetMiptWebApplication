import React from 'react';
import './header.css';
import Box from "@material-ui/core/Box/Box";
import User from "../../resources/img/user.jpg"

const Header = (props) => {
    const {actionButtonHidden, searchButtonHidden} = props;
    return (
        <div className="header">
            <Box fontSize="h6.fontSize">
                <div className="prod-name">Hooligans Production</div>
            </Box>
            <div className="user-info">
                <div className="user-name">Maxim Maslov</div>
                <img className="user-photo" src={User}/>
            </div>
        </div>
    );
};

const backHistory = () => {
    window.history.back();
};

const renderUserImage = (props) => {
    const avatarHidden = props.avatarHidden;
    return avatarHidden ? null : (
        <div className="user-img-wrapper">
        </div>
    );
};

//TODO remove hardcoded values
const renderBaseHeaderContent = (props) => {
    const content = props.content;
    return content ? (
        <div className='base-header-content'>
        </div>
    ) : (
        <div className="user-info-wrapper">
        </div>
    );
};

export default Header;