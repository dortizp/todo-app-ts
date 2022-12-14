import {Todo,ToggleComplete} from "../types"

interface TodoItemProps  {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

const TodoItem : React.FC<TodoItemProps> = ({todo,toggleComplete}): JSX.Element =>  {
  return (
    <div className="row">
      <input 
        type="checkbox"
        onChange={()=> toggleComplete(todo)}
        checked={todo.done}
        />
      <label>{todo.text}</label>  
    </div>
  )
}

export {TodoItem}