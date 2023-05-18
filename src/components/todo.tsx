import {Todo,ToggleComplete, DeleteTodo} from "../types"

interface TodoItemProps  {
  todo: Todo;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
}


const TodoItem : React.FC<TodoItemProps> = ({todo,toggleComplete, deleteTodo}): JSX.Element =>  {
  return (
    <div className="row">
      <input 
        type="checkbox"
        onChange={()=> toggleComplete(todo)}
        checked={todo.done}
        />
        {
        todo.done
          ? <s>{todo.text}</s>
          : <label>{todo.text}</label>
        }
      {/* <div> */}
        <label 
        onClick={()=>deleteTodo(todo)}
        >X</label>
      {/* </div> */}
    </div>
  )
}

export {TodoItem}