import React from "react";
import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
    <li style={{ display: `${props.style}` }} className={classes.NavigationItem}>
        <a href={props.url}>{props.children}</a>
    </li>
);

export default navigationItem;