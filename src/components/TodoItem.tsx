export interface ITodoItem {
  id: string,
  text: string,
  completed: boolean,
  removeTodo: (id: string) => void,
  toggleTodoCompleted: (id: string) => void
}


export const TodoItem = ({ id, completed, text, toggleTodoCompleted, removeTodo }: ITodoItem) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCompleted(id)}
      />
      <span>{text}</span>
      <span
        className='delete'
        onClick={() => removeTodo(id)}
      >
        &times;
      </span>
    </li>
  )
}
