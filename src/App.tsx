import React, { ChangeEventHandler } from 'react';
import './App.css';
import { TodoList } from './components/todoList';
import { AddTodo } from "./components/addTodo"
import { useState,useEffect } from "react"
import {DoneTodo, Todo, ToggleComplete, DeleteTodo} from "./types"
const confetti = require("canvas-confetti") 

declare function create(
  options?: ConfettiOptions | null,
): (options?: ConfettiOptions | null) => void;

interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
}


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

  const deleteTodo : DeleteTodo = (selectedTodo) => {
    const updatedTodos = todoList.filter(todo => todo.id !== selectedTodo.id)
     
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

  const cheers = () => {
    console.log('cheers!')
    let canvas = document.getElementById('my-canvas') as HTMLCanvasElement
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiConfig: ConfettiOptions = {
      particleCount: 100,
      spread: 90,
      // Add other configuration properties as needed
    };
  
    const throwConfetti = confetti.create(canvas,confettiConfig);
    throwConfetti();
  }

  useEffect(()=> {
      if (todoList.every(todo => todo.done)) {
        cheers()
      }
  }, todoList)


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
      <TodoList todos={todoList} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
     </main>
     <div id="canvas-container">
      <canvas id="my-canvas"></canvas>
     </div>
    </div>
  );
}

export default App;
