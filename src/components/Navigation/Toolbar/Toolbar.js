import React from "react";
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <h1><a href="/">Orlik</a></h1>
        </div>
        <nav className={classes.Navigation}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;