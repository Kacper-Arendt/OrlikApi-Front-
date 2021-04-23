import React from "react";

import classes from './Facility.module.css';
import Image from '../../../assets/pitch (1).svg';

const facility = (props) => (
    <div className={classes.Facility}>
        <div className={classes.Image}>
            <img src={Image} alt="Our Object" />
        </div>
        <div className={classes.About}>
            <h2>Name: {props.name}</h2>
            <div>
                <p>Street</p>
                <p>City</p>
            </div>
        </div>
    </div>
)

export default facility;