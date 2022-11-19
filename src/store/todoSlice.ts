import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ITodos } from '../App';


export interface ITodosState {
  todos: ITodos[],
  status: string,
  error: string | unknown
}

const initialState: ITodosState = {
  todos: [],
  status: '',
  error: ''
}

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
      if (!response.ok) {
        throw new Error('Server Error')
      }
      const data = response.json();
      return data
    } catch (rejectedValueOrSerializedError) {
      if (rejectedValueOrSerializedError instanceof Error) return rejectWithValue(rejectedValueOrSerializedError.message);
    }
  }
)

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
      state.error = '';
    }),
      builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "resolved";
        state.todos = action.payload;
      }),
      builder.addCase(fetchTodos.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
  }
})


export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;