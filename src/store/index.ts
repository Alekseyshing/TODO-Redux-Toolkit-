import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import todoReducer from './todoSlice'

export default configureStore({
  reducer: {
    todos: todoReducer
  }
})

export type ReduxState = ReturnType<typeof todoReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type RootState = ReturnType<typeof todoReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
export const useTypedDispatch = () => useDispatch<TypedDispatch>();