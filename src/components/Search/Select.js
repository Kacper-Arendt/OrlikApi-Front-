import React from 'react';
import Select from 'react-select';

function SelectPitchType(props) {

    const customStyles = {
        container: (provided, state) => ({
            ...provided,
            margin: "0px"
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: 'white',
            color: "black",
            width: "300px",
            margin: "0px"
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            margin: "0",
            padding: "0",
        }),
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            margin: "0px 50px 10px",
            fontSize: "15px",
        }),
        control: (provided) => ({
            ...provided,
            margin: "0px 50px 10px",
            width: "300px",
            fontSize: "15px",
        })
    }

    const pitchTypes = [
        { value: "ALL", label: "ALL", name: null },
        { value: "FOOTBALL", label: "FOOTBALL", name: "FOOTBALL" },
        { value: "VOLLEYBALL", label: "VOLLEYBALL", name: "VOLLEYBALL" },
        { value: "TENNIS", label: "TENNIS", name: "TENNIS" }
    ];

    return (
        <Select
            styles={customStyles}
            options={pitchTypes}
            placeholder="Select Fields"
            onChange={props.selectHandler}
        />
    )
}

export default SelectPitchType;