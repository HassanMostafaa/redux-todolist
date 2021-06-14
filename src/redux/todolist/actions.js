import { ADD_TODO, DEL_TODO, UPDATE_TODO } from "./actionTypes";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const delTodo = (todoID) => {
  return {
    type: DEL_TODO,
    payload: todoID,
  };
};

export const updateTodo = (completed, index) => {
  return {
    type: UPDATE_TODO,
    payload: completed,
    index,
  };
};
