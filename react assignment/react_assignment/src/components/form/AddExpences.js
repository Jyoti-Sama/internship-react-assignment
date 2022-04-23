import React from 'react'

import './add_form.css'

function AddExpences(props) {

    const submitHandler = (e) => {

        const title = e.target.title.value;
        const amount = e.target.amount.value;
        const date = e.target.date.value;

        if(!(title && amount && date)) {
            e.preventDefault();
        }

    }

    return (
        <div className='add-form-container'>
            <form onSubmit={submitHandler}>
                <label>Title</label>
                <input type="text" name='title'/>

                <label>Amount</label>
                <input type="number" name='amount'/>

                <label>Date</label>
                <input type="date" name='date'/>

                <button>Add Expences</button>
            </form>
            <button onClick={() => props.onCancelClick()}>cancel</button>
        </div>
    )
}

export default AddExpences