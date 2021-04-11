import React from "react";

import NavigationItem from './NavigationItem/NavigationItem';
import classes from "./NavigationItems.module.css";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem url='/'>Home</NavigationItem>
        <NavigationItem url='/facilities'>Facilities</NavigationItem>
        <NavigationItem >User</NavigationItem>
    </ul>
)

export default navigationItems;