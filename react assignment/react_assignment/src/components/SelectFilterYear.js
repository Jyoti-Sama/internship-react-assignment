import React from 'react'

function SelectFilterYear(props) {

    const selectYearChangeHandler = (value) => {
        
        // passing selected value to parent component(Expences) for filter operation
        props.onSelectYear(value)
    }

    return (
        <div className='filter-contailer'>
            <label>Filter by year</label>
            <select defaultValue="2022" onChange={(e)=> selectYearChangeHandler(e.target.value)}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
        </div>
    )
}

export default SelectFilterYear