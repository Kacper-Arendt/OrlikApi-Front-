import React, { useEffect, useState } from "react";

import axios from "axios";
import classes from './Facilities.module.css';
import Facility from './Facility/Facility';
import Search from '../Search/Search'
import { AuthContext } from '../../App';

const Facilities = (props) => {
    const [facilities, setFacilities] = useState([]);
    const [pagination, setPagination] = useState();
    const { isAuth } = React.useContext(AuthContext);
    const initVal = {
        name: '',
        pitchTypes: null,
        maxPerPage: 10
    }
    const [filters, setFilters] = useState(initVal);

    useEffect(() => {
        if (isAuth) {

            const token = localStorage.getItem(`token`);

            const config = {
                params:
                    filters
                ,
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
                    setPagination(response.data.pagination.total);
                    setFacilities(loadedFacilities);
                }
                )
        }
    }
        , [isAuth, filters]);

    return (
        <section className={classes.Facilities}>
            <Search onClicked={setFilters} />
            <h2 className={classes.ResultsNmb}>Search Results:{pagination}</h2>
            <div className={classes.Objects}>
                {facilities.map(facility =>
                    <Facility
                        key={facility.id}
                        name={facility.name}
                        city={facility.address.city}
                        street={facility.address.street}
                        streetNumber={facility.address.streetNumber}
                        clicked={() => { console.log(facility.id) }}
                    />)}
            </div>
        </section>
    );
}
export default Facilities;