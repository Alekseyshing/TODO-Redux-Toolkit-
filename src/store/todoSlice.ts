import { createSlice, createAsyncThunk, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { ITodos } from '../App';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    const data = response.json();

    return data
  }
)

export interface ITodosState {
  todos: ITodos[],
  status: string,
  error: null
}

const initialState: ITodosState = {
  todos: [],
  status: '',
  error: null
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
      toggledTodo!.completed = !toggledTodo?.completed
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "loading";
      state.error = null;
    }),
      builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "resolved";
        state.todos = action.payload;
      })
  }
})


export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;