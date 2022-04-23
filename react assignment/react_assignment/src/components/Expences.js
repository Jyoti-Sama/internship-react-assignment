import React, { useState } from 'react'
import Expence from './expenceComponents/Expence'
import SelectFilterYear from './SelectFilterYear'

import './expence_container.css'
import AddExpences from './form/AddExpences'

function Expences({ props }) {
  const [expencesdetails, setExpencesdetails] = useState(props)
  const [isAddClicked, setIsAddClicked] = useState(false)

  // handels year filter operations
  const filterExpencesByYear = (year) => {
    console.log(year, "parent")
    const newExpences = props.filter((item) => item.date.getFullYear() === Number(year));
    setExpencesdetails(newExpences)
  }

  // all expences renders here
  const expences = expencesdetails.map(item => <Expence key={item.id} expence={item} />)

  //add functions
  const addExpencesClickHandler = () => {
    setIsAddClicked(!isAddClicked);
  }
  return (
    <div>
      { isAddClicked ? <AddExpences onCancelClick={addExpencesClickHandler}/> : <div className='add-btn-container'><button onClick={addExpencesClickHandler}>Add Expences</button></div>}
      
      
      <div className='main-expence-container'>
        <div>
          <SelectFilterYear onSelectYear={filterExpencesByYear} />
        </div>
        {expences.length > 0 ? expences : <div>No Items To Show</div>}
      </div>
    </div>
  )
}

export default Expences