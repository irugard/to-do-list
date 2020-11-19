import React from 'react'

const Form = ({ handleFormInputChange, handleSubmitForm, inputValue, handleFilter, selected }) => {


    return (
        <form style={{ textAlign: 'center' }}>
            <label for='input' className='labels'>Enter task:&nbsp;&nbsp;</label>
            <input type='text' onChange={handleFormInputChange} value={inputValue} autoFocus className='input-text' id='input'/>
            <button type='submit' onClick={handleSubmitForm} className='submit-button'>Add</button>
            <label for='drop-down' className='labels'>Filter:&nbsp;&nbsp;</label>
            <select name='todo-filter' value={selected} onChange={handleFilter} id='drop-down'>
                <option value='All' className='dropdown-options'>All</option>
                <option value='Completed' className='dropdown-options'>Completed</option>
                <option value='Pending' className='dropdown-options' style={{backgroundColor: "blue"}}>Pending</option>
            </select>
        </form>
    )
}

export default Form