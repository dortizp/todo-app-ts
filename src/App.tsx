import React, { ChangeEventHandler } from 'react';
import './App.css';
import { TodoList } from './components/todoList';
import { AddTodo } from "./components/addTodo"
import { useState } from "react"
import {DoneTodo, Todo, ToggleComplete} from "./types"

function App() {
  const initialTodos:Todo[] = [
        {
          id: 1,
          text:"get food",
          done: false, 
        }, 
        {
          id: 2,
          text:"take out the trash" ,
          done: false
        },
        {
          id: 3,
          text:"send email",
          done: false
        }
      ]
  const [todoList, setTodoList] = useState(initialTodos)
  const [checkAll, setCheckAll] = useState(false)
  const lastId = todoList.length 
  const doneAll = (todos:Todo[]) : DoneTodo[] => {
    return todos.map(todo => ({
      ...todo,
      done: true
    }))
  }
  const doneNone = (todos:Todo[]) : Todo[] => {
    return todos.map(todo => ({
      ...todo,
      done: false 
    }))
  }


  const toggleComplete : ToggleComplete = (selectedTodo) => {
    const updatedTodos = todoList.map(todo => {
      if (todo === selectedTodo) {
        return {...todo, done: !todo.done}
      }
      return todo
    }) 
    setTodoList(updatedTodos)
  }

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

  return (
    <div className="App">
      <header className="App-header">
        <AddTodo addTodo={setTodoList} lastId={lastId}/>
     </header>
     <main className="container">
      <button onClick={toggleAll}>
        {!checkAll
          ? "Check all"
          : "Uncheck all"
        }
        </button>
      <TodoList todos={todoList} toggleComplete={toggleComplete}/>
     </main>
    </div>
  );
}

export default App;
