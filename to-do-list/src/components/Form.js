import React from 'react'

const Form = ({ handleFormInputChange, handleSubmitForm, inputValue, handleFilter, selected }) => {


    return (
        <form style={{ textAlign: 'center' }}>
            <label for='input' className='labels'>Enter task:&nbsp;&nbsp;</label>
            <input type='text' onChange={handleFormInputChange} value={inputValue} autoFocus className='input-text' id='input'/>
            <button type='submit' onClick={handleSubmitForm} className='submit-button'>Add</button>
            <select name='todo-filter' value={selected} style={{ marginLeft: '1em' }} onChange={handleFilter} className='drop-down'>
                <option value='All'>All</option>
                <option value='Completed'>Completed</option>
                <option value='Pending'>Pending</option>
            </select>
        </form>
    )
}

export default Form