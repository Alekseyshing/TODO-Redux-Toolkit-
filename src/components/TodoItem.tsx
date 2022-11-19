import { useTypedDispatch } from "../store";
import { useAppDispatch } from "../store/redux"
import { deleteTodo, toggleStatus } from "../store/todoSlice"


export interface ITodo {
  id: string,
  title: string,
  completed: boolean,
}


export const TodoItem = ({ id, completed, title }: ITodo) => {
  const dispatch = useAppDispatch();
  const typedDispatch = useTypedDispatch();
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => typedDispatch(toggleStatus(id))}
      />
      <span>{title}</span>
      <span
        className='delete'
        onClick={() => typedDispatch(deleteTodo(id))}
      >
        &times;
      </span>
    </li>
  )
}
