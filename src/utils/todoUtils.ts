import {DoneTodo, Todo, ToggleComplete, DeleteTodo} from "../types"

  export const doneAll = (todos:Todo[]) : DoneTodo[] => {
    return todos.map(todo => ({
      ...todo,
      done: true
    }))
  }

  export const doneNone = (todos:Todo[]) : Todo[] => {
    return todos.map(todo => ({
      ...todo,
      done: false 
    }))
  }

  export const toggleComplete : ToggleComplete = (
    selectedTodo: Todo,
    todoList?: Todo[],
    setTodoList?: React.Dispatch<React.SetStateAction<Todo[]>>
    )  => {
      if (todoList && setTodoList) {
        const updatedTodos = todoList.map(todo => {
          if (todo === selectedTodo) {
            return {...todo, done: !todo.done}
          }
          return todo
        }) 
        setTodoList(updatedTodos)
    }
  }

  export const deleteTodo : DeleteTodo = (
    selectedTodo: Todo,
    todoList?: Todo[],
    setTodoList?: React.Dispatch<React.SetStateAction<Todo[]>>
    ) => {
      if (todoList && setTodoList) {
        const updatedTodos = todoList.filter(todo => todo.id !== selectedTodo.id)
        setTodoList(updatedTodos)
      }
  }
