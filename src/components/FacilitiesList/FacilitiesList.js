import axios from 'axios';
import { useEffect, useState } from 'react';

const FacilitiesList = () => {
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
        <div>
            <h1></h1>
        </div>
    )
};

export default FacilitiesList;