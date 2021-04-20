import React from "react";

import NavigationItem from './NavigationItem/NavigationItem';
import classes from "./NavigationItems.module.css";
import { AuthContext } from '../../../App';

const NavigationItems = () => {
    const { isAuth } = React.useContext(AuthContext);

    let log = <NavigationItem url='/login'>Login</NavigationItem>

    if (isAuth) {
        log = <NavigationItem url='/logout'>Log Out</NavigationItem>
    }

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem url='/'>Home</NavigationItem>
            <NavigationItem url='/facilities'>Facilities</NavigationItem>
            {log}

        </ul>
    )
}

export default NavigationItems;