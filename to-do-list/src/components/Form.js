import React from 'react'

const Form = ({handleFormInputChange, handleSubmitForm, value}) => {


    return(
        <form style={{textAlign: 'center'}}>
            <input type='text' onChange={handleFormInputChange} value={value}/>
            <button type='submit' onClick={handleSubmitForm}>Add</button>
            <select name='todo-filter' style={{marginLeft: '1em'}}>
                <option selected='selected'>All</option>
                <option>Completed</option>
                <option>Pending</option>
            </select>
        </form>
    )
}

export default Form