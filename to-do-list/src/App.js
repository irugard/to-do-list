import './App.css';
import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import Form from './components/Form';

function App() {

  const [formInput, setFormInput] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [filter, setFilter] = useState(JSON.parse(localStorage.getItem('filter')) || 'All');


  useEffect(() => {
    setFilteredTodos(todos.filter(el => {
      if (filter === 'Pending') {
        return el.completed === false;
      } if (filter === 'Completed') {
        return el.completed === true;
      } return el;
    }))

    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter, todos])



  const handleFormInputChange = e => {
    setFormInput(e.target.value);
  }

  const updateHandler = (e, key, value) => {

    setTodos(todos.map((item) => {
      if (item.id.toString() === e.target.id) {
        return { ...item, [key]: value }
      }
      return item;
    }))

  }
  const handleSubmitForm = e => {
    e.preventDefault();
    if (formInput.trim() !== "") {
      setTodos([...todos, { text: formInput, completed: false, id: counter, isEditable: false }]);
      setFormInput("");
      setCounter(prev => prev + 1);
    }

  }

  const handleFilter = e => {
    setFilter(e.target.value);
  } 

  const handleDeleteTodoItem = e => {
    setTodos(todos.filter((el) => el.id.toString() !== e.target.id));
  }

  const handleChecked = (e, value) => {
    updateHandler(e, 'completed', value);
  }

  const handleEdit = (e, value) => {
    updateHandler(e, 'isEditable', value)
  }

  const handleOnChange = (e) => {
    updateHandler(e, 'text', e.target.value);
  }


  return (
    <>
      <Form
        handleFormInputChange={handleFormInputChange}
        handleSubmitForm={handleSubmitForm}
        inputValue={formInput}
        filter={filter}
        handleFilter={handleFilter}
        selected={filter}
      />
      <ul className='todo-list'>
        {filteredTodos.map(item => {
          return (
            <li className='todo-list-items'>
              <Task
                key={item.id}
                value={item.text}
                handleDeleteTodoItem={handleDeleteTodoItem}
                handleChecked={(e) => handleChecked(e,!item.completed)}
                handleOnChange = {handleOnChange}
                id={item.id}
                isEditable = {item.isEditable}
                handleEdit = {(e) => handleEdit(e, !item.isEditable)}
                checked={item.completed}
              />
            </li>)
        })}
      </ul>

    </>
  );
}

export default App;
