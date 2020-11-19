import React from 'react'

const Task = ({ value, handleDeleteTodoItem, handleChecked, id , checked, handleEdit, handleOnChange, isEditable, autofocus}) => {
    return (
        <div className='task-div'>
            <input type='checkbox' onChange={handleChecked} id={id} checked={checked} className='checkbox'/>
            <input type='text' value={value} className='task-text' id={id} disabled={!isEditable} onChange = {handleOnChange}/>
            <div className='edit-button'><img src="https://cdn.discordapp.com/attachments/694758283759583233/778974241730199592/edit-32.png" alt="edit icon" className='edit-button-image' id={id} onClick={handleEdit}/></div>     
            <div className='delete-button'><img src="https://img.pngio.com/bin-trash-can-waste-icon-trash-icon-png-512_512.png" alt="Bin, trash can, waste icon" className='delete-button-image' id={id} onClick={handleDeleteTodoItem}/></div>
        </div>
    )
}

export default Task
