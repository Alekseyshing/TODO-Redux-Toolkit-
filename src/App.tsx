import { useState } from 'react'
import './App.css'
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';

export interface ITodos {
  id: string,
  text: string,
  completed: boolean
}


function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        },
      ]),
        setText('')
    }
  }

  const toggleTodoCompleted = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    )
  }


  const removeTodo = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
      <InputField text={text} setText={setText} handleSubmit={addTodo}></InputField>
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodoCompleted={toggleTodoCompleted} />
    </div>
  )
}

export default App
