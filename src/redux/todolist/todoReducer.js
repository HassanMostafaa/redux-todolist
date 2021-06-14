import { ADD_TODO, DEL_TODO, UPDATE_TODO } from "./actionTypes";
import { v4 as uuid_v4 } from "uuid";

const initlaState = {
  todos: [
    { id: uuid_v4(), body: "item 1 from redux", completed: false },
    { id: uuid_v4(), body: "item 2 from redux", completed: true },
    { id: uuid_v4(), body: "item 3 from redux", completed: false },
  ],
};

const todoReducer = (state = initlaState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          // id: state.todos[state.todos.length - 1].id + 1,
          id: uuid_v4(),
          body: action.payload,
          completed: false,
        }),
      };
    case DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case UPDATE_TODO:
      const i = action.index;
      const newTodos = [...state.todos];
      newTodos[i].completed = !action.payload;
      return {
        ...state,
        todos: newTodos,
      };

    default:
      return state;
  }
};

export default todoReducer;
