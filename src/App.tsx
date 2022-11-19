import { useState, useEffect } from 'react'
import './App.css'
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';
import { useTypedDispatch } from './store';
import { useAppDispatch, useTypedSelector } from './store/redux';
import { addTodo, fetchTodos } from './store/todoSlice'

export interface ITodos {
  id: string,
  text: string,
  completed: boolean,
}


function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  const { status, error } = useTypedSelector(state => state.todos);
  const typedDispatch = useTypedDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('')
  }

  useEffect(() => {
    typedDispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className="App">
      <InputField
        text={text}
        setText={setText}
        handleSubmit={addTask}
      />
      {status === 'loading' && <h1>Loading...</h1>}
      {error && <h2>An Error Ocured: {error}</h2>}
      <TodoList />
    </div>
  )
}

export default App
