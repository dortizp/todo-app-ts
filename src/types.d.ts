export type Todo = {
  id: Number,
  text: String,
  done?: boolean
}

export type DoneTodo = {
  id: Number,
  text: String,
  done: true 
}

export type ToggleComplete = (selectedTodo: Todo) => void;
