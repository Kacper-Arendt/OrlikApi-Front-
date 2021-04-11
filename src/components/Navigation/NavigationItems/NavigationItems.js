import React from "react";

import NavigationItem from './NavigationItem/NavigationItem';
import classes from "./NavigationItems.module.css";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem >Home</NavigationItem>
        <NavigationItem >Facilities</NavigationItem>
        <NavigationItem >User</NavigationItem>
    </ul>
)

export default navigationItems;