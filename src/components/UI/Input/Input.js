import React from "react";

import classes from "./input.module.css";

const input = (props) => {
    let inputEl = null;

    switch (props.inputtype) {
        case ('input'):
            inputEl = <input className={classes.InputEl} {...props} />
            break;
        case ('textarea'):
            inputEl = <textarea className={classes.InputEl} {...props} />
            break;
        case ('checkbox'):
            inputEl =
                <label className={classes.CheckLabel} htmlFor={props.id}>{props.text}
                    <input className={classes.Check} type="checkbox" name={props.id} value={props.value} id={props.id} /></label>

            break;
        default:
            inputEl = <input className={classes.InputEl} {...props} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label} >{props.label}</label>
            {inputEl}
        </div>
    )
}

export default input;