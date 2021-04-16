import React from "react";

import classes from "./input.module.css";

const input = (props) => {
    let inputEl = null;

    switch (props.inputType) {
        case ('input'):
            inputEl = <input className={classes.InputEl} {...props} />
            break;
        case ('textarea'):
            inputEl = <textarea className={classes.InputEl} {...props} />
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