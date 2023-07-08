import {Todo,ToggleComplete, DeleteTodo} from "../types"
import { Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps  {
  todo: Todo;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
}


const TodoItem : React.FC<TodoItemProps> = ({todo,toggleComplete, deleteTodo}): JSX.Element =>  {
  return (
    <div className="row-todo">
      <div>
        <Checkbox 
          onChange={()=> toggleComplete(todo)}
          checked={todo.done}
          />
          {
          todo.done
            ? <s>{todo.text}</s>
            : <label>{todo.text}</label>
          }
      </div>
      <div>
        <DeleteIcon 
          color="primary" 
          onClick={()=>deleteTodo(todo)}
        />
      </div>
    </div>
  )
}

export {TodoItem}