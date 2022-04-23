import React, { useState } from 'react'
import Expence from './expenceComponents/Expence'

import './expence_container.css'
import AddExpences from './form/AddExpences'

function Expences() {
  const [expencesdetails, setExpencesdetails] = useState([])
  const [isAddClicked, setIsAddClicked] = useState(false)

  
  //add functions
  const addExpencesClickHandler = () => {
    setIsAddClicked(!isAddClicked);
  }
  
  const addExpenceHandler = (expence) => {
    setExpencesdetails(initialProps => [...initialProps,{id:Math.random().toString(),...expence}])
  } 
  
  //delete function
  const deleteExpenceHandler = (id) => {
    console.log(id)
    setExpencesdetails(initialProps => {
      const newExpences = [...initialProps].filter(expence => !(expence.id === id));
      return newExpences
    })
  }

  // all expences renders here
  const expences = expencesdetails.map(item => <Expence key={item.id} expence={item} onExpemceDelete={deleteExpenceHandler}/>)
  
  return (
    <div>
      { isAddClicked ? <AddExpences onExpenceAdd={addExpenceHandler} onCancelClick={addExpencesClickHandler}/> : <div className='add-btn-container'><button onClick={addExpencesClickHandler}>Add Expences</button></div>}
      
      
      <div className='main-expence-container'>
        {expences.length > 0 ? expences : <div>No Items To Show</div>}
      </div>
    </div>
  )
}

export default Expences