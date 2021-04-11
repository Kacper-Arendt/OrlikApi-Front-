import React from "react";

import classes from './Facilities.module.css';
import Facility from './Facility/Facility';


const facilities = () => (
    <section className={classes.Facilities}>
        <h2 className={classes.SectionName}>Our Newest Facilities </h2>
        <div className={classes.Objects}>
            <Facility/>
            <Facility/>
            <Facility/>
        </div>
    </section>
);

export default facilities;