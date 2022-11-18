import { useAppDispatch } from "../store/redux"
import { removeTodo, toggleTodoComplete } from "../store/todoSlice"


export interface ITodo {
  id: string,
  text: string,
  completed: boolean,
}


export const TodoItem = ({ id, completed, text }: ITodo) => {
  const dispatch = useAppDispatch()
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <span
        className='delete'
        onClick={() => dispatch(removeTodo({ id }))}
      >
        &times;
      </span>
    </li>
  )
}
