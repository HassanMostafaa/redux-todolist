import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/rootActions";
const TodoForm = () => {
  const [todoVal, setTodoVal] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (todoVal !== "") {
      dispatch(addTodo(todoVal));
      e.preventDefault();
      setTodoVal("");
    } else {
      alert("empty");
    }
  };

  return (
    <div>
      <div className="form">
        <input
          required
          type="text"
          placeholder="Add Todo"
          value={todoVal}
          onChange={(e) => {
            e.preventDefault();
            setTodoVal(e.target.value);
          }}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </div>
    </div>
  );
};

export default TodoForm;
