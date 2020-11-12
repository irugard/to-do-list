import './App.css';
import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import Form from './components/Form';

function App() {

  const [formInput, setFormInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleFormInputChange = e => {
    setFormInput(e.target.value);
  }

  const handleSubmitForm = e => {
    e.preventDefault();
    if(formInput.trim() !== ""){
      setTodos([...todos, { text: formInput, completed: false, id: counter }]);
      setFormInput("");
      setCounter(prev => prev + 1);
    }
    
  }

  const handleDeleteTodoItem = e => {
    //tried doing dummyArray = todos but that sets the memory address to the same, and that cant be changed since its a state variable and thats why it wasnt working before
    //also used splice but because the id of the items doesnt update like splice does, it will cause it to break, must use delete so it leaves the items in their original index even with deletions
    let dummyArray = todos.slice();
    delete dummyArray[e.target.id];
    setTodos(dummyArray);

  }

  const handleChecked = e => {
    todos[e.target.id].completed = !todos[e.target.id].completed;
    console.log(todos[e.target.id]);
  }

  return (
    <>
      <Form
        handleFormInputChange={handleFormInputChange}
        handleSubmitForm={handleSubmitForm}
        value={formInput}
      />
      <ul className='todo-list'>
      {todos.map(item => {
        return (
        <li className='todo-list-items'>
          <Task 
            key={item.id}
            value={item.text}
            handleDeleteTodoItem={handleDeleteTodoItem}
            checked={false}
            handleChecked={handleChecked}
            id={item.id}
            />
          </li>)
      })}
      </ul>
      
    </>
  );
}

export default App;
