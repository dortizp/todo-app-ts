import Button from '@mui/material/Button';
import React, { ChangeEventHandler } from 'react';
import './App.css';
import { TodoList } from './components/todoList';
import { AddTodo } from "./components/addTodo"
import { useState,useEffect } from "react"
import { doneAll, doneNone, toggleComplete, deleteTodo } from "./utils/todoUtils";
import { cheers } from "./utils/confettiUtils";
import { initialTodos } from "./data/initialData";


function App() {

  const [todoList, setTodoList] = useState(initialTodos)
  const [checkAll, setCheckAll] = useState(false)
  const lastId = todoList.length 

  const handleCheckAll = (e:React.MouseEvent<HTMLButtonElement>) => {
    const updatedTodos = doneAll(todoList)
    setTodoList(updatedTodos)
    setCheckAll(true)
  }

  const handleUncheckAll = (e:React.MouseEvent<HTMLButtonElement>) => {
    const updatedTodos = doneNone(todoList)
    setTodoList(updatedTodos)
    setCheckAll(false)
  }

  const toggleAll = (e:React.MouseEvent<HTMLButtonElement>) => {
    if (checkAll) 
      handleUncheckAll(e)
    else handleCheckAll(e)
  }

  useEffect(()=> {
      if (todoList.every(todo => todo.done)) {
        cheers()
      }
  }, [todoList])

  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          <span className="title">Todo App</span>
        </header>
        <div className="add-todo">
          <AddTodo addTodo={setTodoList} lastId={lastId}/>
           </div>
        <div className="todo-list">
          <TodoList todos={todoList} toggleComplete={toggleComplete} deleteTodo={deleteTodo} setTodoList={setTodoList}/>
        </div>
        <footer>
          <Button variant="outlined" onClick={toggleAll}>
            {!checkAll
              ? "Check all"
              : "Uncheck all"
            }
          </Button>
        </footer>
        <div id="canvas-container">
          <canvas id="my-canvas"></canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
