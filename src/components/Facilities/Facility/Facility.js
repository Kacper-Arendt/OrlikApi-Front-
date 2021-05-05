import React from "react";

import classes from './Facility.module.css';
import Image from '../../../assets/pitch (1).svg';
import Button from '../../UI/Button/Button'

const facility = (props) => {
    return (
        <div className={classes.Facility} >
            <div className={classes.Image}>
                <img src={Image} alt="Our Object" />
            </div>
            <div className={classes.About}>
                <h2>Name: {props.name}</h2>
                <div>
                    <p>City: {props.city}</p>
                    <p>Street: {props.street} {props.streetNumber}</p>
                </div>
            </div>
            <div className={classes.Button}>
                <Button
                    btnType="Success"
                    clicked={props.clicked}
                >See more</Button>
            </div>
        </div >
    )
}

export default facility;