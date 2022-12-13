import { useState } from "react"
const AddTodo = (props) => {
  const [todo, setTodo] = useState("") 

  function handleAddTodo () {
    const newTodo = {
      id: (props.lastId + 1),
      text: todo,
      done: false
    }
    props.addTodo(current => [...current, newTodo])
    setTodo("")
  }


  return (
    <div className="addTodoBar">
      <input 
        type="text" 
        placeholder="new todo ..."
        value = {todo}
        onChange={(e) => setTodo(e.target.value)}
        />
      <button
        onClick={handleAddTodo}
      >Add
      </button>
    </div>
  )
}

export {AddTodo}