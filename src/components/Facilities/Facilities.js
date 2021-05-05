import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import classes from './Facilities.module.css';
import Facility from './Facility/Facility';
import Search from '../Search/Search'
import { AuthContext } from '../../App';

const Facilities = (props) => {
    const [facilities, setFacilities] = useState([]);
    const [pagination, setPagination] = useState();
    const { isAuth } = React.useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const initVal = {
        name: '',
        pitchTypes: null,
        maxPerPage: 20
    }
    const [filters, setFilters] = useState(initVal);

    useEffect(() => {
        if (isAuth) {
            setIsLoading(true);
            const token = localStorage.getItem(`token`);
            const config = {
                params:
                    filters,
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
                    setIsLoading(false);
                });
        }
    }, [isAuth, filters]);

    const routeChange = (id) => {
        let path = `facilities/${id}`;
        history.push(path);
    }

    return (
        <section className={classes.Facilities}>
            <Search onClicked={setFilters} />
            <h2 className={classes.ResultsNmb}>Total:{pagination}</h2>
            {isLoading ? (
                <div className={classes.Loading}>Loading...</div>
            ) : (
                <div className={classes.Objects}>
                    {facilities.map(facility =>
                        <Facility
                            key={facility.id}
                            name={facility.name}
                            city={facility.address.city}
                            street={facility.address.street}
                            streetNumber={facility.address.streetNumber}
                            clicked={() => { routeChange(facility.id) }}
                        />)}
                </div>
            )}
        </section>
    );
}
export default Facilities;