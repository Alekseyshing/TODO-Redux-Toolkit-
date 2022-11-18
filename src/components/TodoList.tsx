import { TodoItem } from "./TodoItem"
import { useAppDispatch, useAppSelector } from "../store/redux"
import { removeTodo, toggleTodoComplete } from "../store/todoSlice"


export const TodoList = () => {
  const todos = useAppSelector(state => state.todos.todos)
  const dispatch = useAppDispatch()
  return (
    <ul>
      {todos.map(item => <TodoItem key={item.id}
        removeTodo={dispatch(removeTodo)}
        toggleTodoCompleted={dispatch(toggleTodoComplete)}
        {...item} />)}
    </ul>
  )
}