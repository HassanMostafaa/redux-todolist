import { combineReducers } from "redux";
import todoReducer from "./todolist/todoReducer";

const rootReducers = combineReducers({
  todoList: todoReducer,
});

export default rootReducers;
