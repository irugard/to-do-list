import './App.css';
import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import Form from './components/Form';

function App() {

  const [formInput, setFormInput] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos'))||[]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [filter, setFilter] = useState(JSON.parse(localStorage.getItem('filter'))|| 'All');

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

  const handleSubmitForm = e => {
    e.preventDefault();
    if (formInput.trim() !== "") {
      setTodos([...todos, { text: formInput, completed: false, id: counter }]);
      setFormInput("");
      setCounter(prev => prev + 1);
    }

  }

  const handleFilter = e => {
    setFilter(e.target.value)
  }

  const handleDeleteTodoItem = e => {
    //tried doing dummyArray = todos but that sets the memory address to the same, and that cant be changed since its a state variable and thats why it wasnt working before
    //also used splice but because the id of the items doesnt update like splice does, it will cause it to break, must use delete so it leaves the items in their original index even with deletions
    //but then when you deleted all entry, the actual todos state has bunch of undefined, the code breaks, have to use different method: filter should work
    setTodos(todos.filter((el) => JSON.stringify(el.id) !== e.target.id))
  }

  const handleChecked = e => {
    setTodos(todos.map((item) => {
      if (JSON.stringify(item.id) === e.target.id) {
        return { ...item, completed: !item.completed }
      }
      return item;
    }))
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
                handleChecked={handleChecked}
                id={item.id}
                checked = {item.completed}
              />
            </li>)
        })}
      </ul>

    </>
  );
}

export default App;
