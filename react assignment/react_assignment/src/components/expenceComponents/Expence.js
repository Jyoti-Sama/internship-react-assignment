import React from 'react'
import AmountComponent from './AmountComponent';
import DateComponent from './DateComponent';
import TitleComponent from './TitleComponent';

import './expenceStyle.css';

function Expence({expence}) {
  
  return (
    <div className='expence-container'>
      <DateComponent date={expence.date}/>
      <TitleComponent title={expence.title}/>
      <AmountComponent amount={expence.amount}/>
    </div>
  )
}

export default Expence;