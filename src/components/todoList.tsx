import {Todo, ToggleComplete, DeleteTodo} from "../types"
import {TodoItem} from "../components/todo"

interface Props {
  todos: Todo[];
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
}

const TodoList = ({todos,toggleComplete, deleteTodo}:Props) => {
  return (
    <div className="list">
      {
      todos && todos.map(
        todo => <TodoItem todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      )}
    </div>
  )
}

export {TodoList}