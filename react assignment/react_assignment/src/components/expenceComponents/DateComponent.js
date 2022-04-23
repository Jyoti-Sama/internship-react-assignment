import React from 'react';

function DateComponent({ date }) {
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];


  return (
    <div className='dateBox'>
      <div>{months[date.getMonth() - 1]}</div>
      <div>{date.getFullYear()}</div>
      <div>{date.getDate()}</div>
    </div>
  )
}

export default DateComponent