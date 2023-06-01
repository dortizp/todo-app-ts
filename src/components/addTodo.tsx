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
{/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
{/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
{/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      <TextField 
        id="outlined-basic"
        variant="filled"
        label="new todo"
        value = {todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        />
      <Button
        variant = "contained"
        onClick={handleAddTodo}
      >Add
      </Button>
    </div>
  )
}

export {AddTodo}