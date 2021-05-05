import React, { useState } from "react";

import NavigationItem from './NavigationItem/NavigationItem';
import classes from "./NavigationItems.module.css";
import { AuthContext } from '../../../App';

const NavigationItems = () => {
    const { isAuth } = React.useContext(AuthContext);
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem url='/'>Home</NavigationItem>
            <NavigationItem url='/facilities'>Facilities</NavigationItem>
            <NavigationItem style={isAuth ? 'none' : 'null'} url='/register'>Sign Up</NavigationItem>
            <NavigationItem style={isAuth ? 'none' : 'null'} url='/login'>Sign In</NavigationItem>
            <NavigationItem style={isAuth ? '' : 'none'} url='/logout'>Log Out</NavigationItem>

        </ul >
    )
}

export default NavigationItems;