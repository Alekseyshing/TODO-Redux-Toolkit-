import { ITodos } from "../App"
import { TodoItem } from "./TodoItem"

export interface ITodoList {
  todos: ITodos[],
  removeTodo: (id: string) => void,
  toggleTodoCompleted: (id: string) => void
}


export const TodoList = ({ todos, removeTodo, toggleTodoCompleted }: ITodoList) => {
  return (
    <ul>
      {todos.map(item => <TodoItem key={item.id}
        removeTodo={removeTodo}
        toggleTodoCompleted={toggleTodoCompleted}
        {...item} />)}
    </ul>
  )
}