import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
      <div className="input">
        <TextField 
          id="outlined-basic"
          // variant="filled"
          label="Add new todo"
          value = {todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          fullWidth
          />
      </div>
      <div>
        <Button
          variant = "contained"
          onClick={handleAddTodo}
        >Add
        </Button>
      </div>
    </div>
  )
}

export {AddTodo}