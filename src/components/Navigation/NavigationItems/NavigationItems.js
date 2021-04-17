import React from "react";

import NavigationItem from './NavigationItem/NavigationItem';
import classes from "./NavigationItems.module.css";
import { useAuth } from "../../../context/auth";

const NavigationItems = () => {
    const { isAuth } = useAuth;
    console.log(`nav items ${isAuth}`);
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