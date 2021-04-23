import React, { useEffect, useState } from "react";

import axios from "axios";
import classes from './Facilities.module.css';
import Facility from './Facility/Facility';


const Facilities = (props) => {
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem(`token`);

        const config = {
            headers: {
                Authorization: token.slice(1, -1)
            }
        }

        axios.get('http://localhost/api/facilities', config)
            .then(response => {
                const loadedFacilities = [];
                const results = response.data.results
                results.forEach(el => {
                    loadedFacilities.push({
                        id: el.facility.id,
                        name: el.facility.name,
                        address: el.facility.address,
                        createdAt: el.facility.createdAt
                    })
                });
                setFacilities(loadedFacilities);
            }
            )
    }, []);


    return (
        <section className={classes.Facilities}>
            <h2 className={classes.SectionName}> {props.children} </h2>
            <div className={classes.Objects}>
                {facilities.map(facility =>
                    <Facility
                        key={facility.id}
                        name={facility.name}
                        city={facility.address.city}
                        street={facility.address.street}
                        streetNumber={facility.address.streetNumber}
                    />)}
            </div>
        </section>
    );
}
export default Facilities;