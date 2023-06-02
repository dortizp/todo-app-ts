import {Todo, ToggleComplete, DeleteTodo} from "../types"
import {TodoItem} from "../components/todo"

interface Props {
  todos: Todo[];
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos,toggleComplete, deleteTodo, setTodoList}:Props) => {
  return (
    <div className="list">
      {
      todos && todos.map( todo => (
        <TodoItem
          key={todo.id.toString()}
          todo={todo}
          toggleComplete={() => toggleComplete(todo, todos, setTodoList)}
          deleteTodo={() => deleteTodo(todo, todos, setTodoList)}
        />
      )
    )}
    </div>
  )
}

export {TodoList}