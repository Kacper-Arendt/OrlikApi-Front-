import React, { useState } from "react";

import classes from './Search.module.css'
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import SelectPitchType from '../Search/Select'

function Search({ onClicked }) {
    const initVal = {
        name: '',
        maxPerPage: 10
    }
    const [filters, setFilters] = useState(initVal);

    const onHandleSubmit = (event) => {
        event.preventDefault();
        onClicked(filters)
    }

    function onHandleChange(event) {
        const value = event.target.value;
        setFilters({
            ...filters,
            [event.target.name]: value
        });
    }

    const selectHandler = (selectedOption) => {
        let arr = selectedOption.name
        setFilters({
            ...filters,
            pitchTypes: arr
        })
    }

    return (
        <div className={classes.Search}>
            <form onSubmit={onHandleSubmit}>
                <Input
                    style={{ height: "45px" }}
                    name="name"
                    placeholder="Name"
                    value={filters.name}
                    inputtype="input"
                    type="text"
                    onChange={onHandleChange}
                />
                <SelectPitchType selectHandler={selectHandler} />
                <Button
                    btnType="Success">Search</Button>
            </form>
        </div >
    )
}

export default Search;