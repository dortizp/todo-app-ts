import {Todo, ToggleComplete} from "../types"
import {TodoItem} from "../components/todo"

interface Props {
  todos: Todo[];
  toggleComplete: ToggleComplete;
}

const TodoList = ({todos,toggleComplete}:Props) => {
  return (
    <div className="list">
      {
      todos && todos.map(
        todo => <TodoItem todo={todo} toggleComplete={toggleComplete}/>
      )}
    </div>
  )
}

export {TodoList}