import { combineReducers } from 'redux';
import asyncTodoListReducer from '../slices/asyncTodoListSlice';
import todoListReducer from '../slices/todoListSlice';

export const rootReducer = combineReducers({
  asyncTodoList: asyncTodoListReducer,
  todoList: todoListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
