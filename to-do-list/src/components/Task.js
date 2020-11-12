import React from 'react'

const Task = ({ value, handleDeleteTodoItem, handleChecked, id , checked}) => {
    return (
        <div>
            <input type='text' value={value} readOnly className='task-text' id={id} />
            <input type='checkbox' onChange={handleChecked} id={id} checked={checked} className='checkbox'/>
            <button type='button' id={id} onClick={handleDeleteTodoItem} className='remove-button'>Remove</button>
        </div>
    )
}

export default Task
