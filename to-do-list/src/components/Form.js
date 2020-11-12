import React from 'react'

const Form = ({ handleFormInputChange, handleSubmitForm, inputValue, filter, handleFilter }) => {


    return (
        <form style={{ textAlign: 'center' }}>
            <input type='text' onChange={handleFormInputChange} value={inputValue} autoFocus/>
            <button type='submit' onClick={handleSubmitForm}>Add</button>
            <select name='todo-filter' style={{ marginLeft: '1em' }} onChange={handleFilter}>
                <option value='All'>All</option>
                <option value='Completed'>Completed</option>
                <option value='Pending'>Pending</option>
            </select>
        </form>
    )
}

export default Form