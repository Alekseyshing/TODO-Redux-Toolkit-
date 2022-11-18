import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'

export default configureStore({
  reducer: {
    todos: todoReducer
  }
})

export type RootState = ReturnType<typeof todoReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']