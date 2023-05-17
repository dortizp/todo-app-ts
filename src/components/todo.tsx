import {Todo,ToggleComplete} from "../types"

interface TodoItemProps  {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter")
      console.log('enter pressed')
  }

  const log = (e: React.KeyboardEvent) => {
    console.log(e.key)
  }


const TodoItem : React.FC<TodoItemProps> = ({todo,toggleComplete}): JSX.Element =>  {
  return (
    <div className="row">
      <input 
        type="checkbox"
        onChange={()=> toggleComplete(todo)}
        onKeyDown={handleKeyDown}
        checked={todo.done}
        onKeyUp={log}
        />
        {
        todo.done
          ? <s>{todo.text}</s>
          : <label>{todo.text}</label>
        }
    </div>
  )
}

export {TodoItem}