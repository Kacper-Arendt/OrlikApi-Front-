import React from "react";

import classes from './Facilities.module.css';
import Facilities from '../../components/Facilities/Facilities';

const facilities = () => (
    <div className={classes.Facilities}>
        <section className={classes.Result}>
            <Facilities></Facilities>
        </section>
    </div>
)

export default facilities;