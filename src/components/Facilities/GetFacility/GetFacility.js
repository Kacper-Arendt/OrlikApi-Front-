import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

import classes from './GetFacility.module.css';
import { AuthContext } from '../../../App';
import Image from '../../../assets/pitch (1).svg';

const GetFacility = () => {
    const { isAuth } = React.useContext(AuthContext);
    const [handledFacility, setHandledFacility] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const [url] = useState('http://localhost/api/facilities/')

    useEffect(() => {
        if (isAuth) {
            const fetchData = async () => {
                setIsLoading(true)
                const token = localStorage.getItem(`token`);
                const config = {
                    headers: {
                        Authorization: token.slice(1, -1)
                    }
                }
                const result = await axios.get(url + id, config)
                setIsLoading(false)
                setHandledFacility({ ...result.data })
            };
            fetchData();
        }
        // eslint-disable-next-line
    }, [isAuth]);
    const Facility = () => {
        return (
            <div className={classes.Facility} >
                <div className={classes.Image}>
                    <img src={Image} alt="Our Facility" />
                </div>
                <div className={classes.About}>
                    <h1 className={classes.Name}>Name: {handledFacility.facility.name}</h1>
                    <div className={classes.Address}>
                        <h2>Address</h2>
                        <p>City: {handledFacility.facility.address.city} </p>
                        <p>Street: {handledFacility.facility.address.street}</p>
                        <p>Street Number: {handledFacility.facility.address.streetNumber}</p>
                        <p>Postcode: {handledFacility.facility.address.postCode}</p>
                    </div>
                    <div className={classes.PitchTypes}>
                        <h2>Pitch Types:</h2>
                        <ul>
                            {handledFacility.pitchType.map(el =>
                                <li key={el.id}>{el.name}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div >
        )
    }

    return (
        <div className={classes.GetFacility}>
            {isLoading ? (
                <div className={classes.Loading}>Loading...</div>
            ) : (
                <Fragment>
                    {handledFacility ? (
                        <Facility />

                    ) : (
                        null)}
                </Fragment>
            )}
        </div>
    );
}

export default GetFacility;