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

export type ToggleComplete = (
  selectedTodo: Todo,
  todoList?: Todo[],
  setTodoList?: React.Dispatch<React.SetStateAction<Todo[]>>
) => void;

export type DeleteTodo = (
  selectedTodo: Todo,
  todoList?: Todo[],
  setTodoList?: React.Dispatch<React.SetStateAction<Todo[]>>
) => void;

// typings.d.ts or types.d.ts

declare module 'canvas-confetti' {
  export function create(
    options?: ConfettiOptions | null,
  ): (options?: ConfettiOptions | null) => void;

  export interface ConfettiOptions {
    particleCount?: number;
    spread?: number;
    // Add other properties as needed
  }
}
