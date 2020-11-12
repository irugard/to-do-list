import React from 'react'

const Task = ({ value, handleDeleteTodoItem, handleChecked, id }) => {
    return (
        <div>
            <input type='text' value={value} readOnly className='task-text' id={id} />
            <input type='checkbox' onChange={handleChecked} id={id} />
            <button type='button' id={id} onClick={handleDeleteTodoItem} >Remove</button>
        </div>
    )
}

export default Task
