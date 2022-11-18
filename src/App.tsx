import { useState } from 'react'
import './App.css'
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';
import { useAppDispatch } from './store/redux';
import { addTodo } from './store/todoSlice'

export interface ITodos {
  id: string,
  text: string,
  completed: boolean
}


function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('')
  }



  return (
    <div className="App">
      <InputField text={text} setText={setText} handleSubmit={addTask}></InputField>
      <TodoList />
    </div>
  )
}

export default App
