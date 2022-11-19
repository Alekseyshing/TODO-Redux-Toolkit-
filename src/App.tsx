import { useState, useEffect } from 'react'
import './App.css'
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';
import { useTypedDispatch } from './store';
import { useAppDispatch } from './store/redux';
import { addTodo, fetchTodos } from './store/todoSlice'

export interface ITodos {
  id: string,
  text: string,
  completed: boolean,
}


function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
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
      <InputField text={text} setText={setText} handleSubmit={addTask}></InputField>
      <TodoList />
    </div>
  )
}

export default App
