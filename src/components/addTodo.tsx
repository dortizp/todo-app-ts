import { useState } from "react"
import { Todo } from "../types"
const AddTodo = (props: any) => {
  const [todo, setTodo] = useState("") 

  function handleAddTodo () {
    const newTodo = {
      id: (props.lastId + 1),
      text: todo,
      done: false
    }
    props.addTodo((current : Todo[]) => [...current, newTodo])
    setTodo("")
  }

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter")
      handleAddTodo()
  }

  return (
    <div className="addTodoBar">
      <input 
        type="text" 
        placeholder="new todo ..."
        value = {todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        />
      <button
        onClick={handleAddTodo}
      >Add
      </button>
    </div>
  )
}

export {AddTodo}