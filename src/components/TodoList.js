import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, delTodo } from "../redux/rootActions";
import { AiFillDelete } from "react-icons/ai";
const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);
  const [todoNum, setTodoNum] = useState(todoList.todos.length);
  const [childLength, setChildLength] = useState(0);
  const dispatch = useDispatch();
  const doneEl = useRef();

  setTimeout(() => {
    if (doneEl.current) {
      setChildLength(doneEl.current.children.length);
    } else {
      return;
    }
  }, 10);

  useEffect(() => {
    setTodoNum(todoList.todos.length);
  }, [todoList.todos.length]);
  // setChildLength(doneEl.current.children.length + 1);
  return (
    <div className="todo-list">
      <div className="todoss">
        {todoList.todos.length > 0
          ? `You Have ${todoNum} Todos`
          : "No Todos Today"}
        {todoList.todos.map((todoItem, index) => (
          <li
            key={index}
            style={{
              textDecoration: todoItem.completed ? "line-through" : "none",
              padding: "10px 0",
            }}
          >
            <span style={{ fontWeight: 600, fontSize: "20px" }}>
              {todoItem.body}
            </span>
            <div className="liChild">
              <input
                type="checkbox"
                checked={todoItem.completed ? true : false}
                onChange={() => {
                  dispatch(updateTodo(todoItem.completed, index));
                }}
              />
              <button
                onClick={() => {
                  dispatch(delTodo(todoItem.id));
                }}
                style={{ margin: "0 10px" }}
              >
                <AiFillDelete />
              </button>
            </div>
          </li>
        ))}
      </div>

      <div className="completed">
        <h1>Completed</h1>
        You Have {childLength} Completed Todos
        <div ref={doneEl}>
          {todoList.todos.map((todo, ix) =>
            todo.completed === true ? (
              <div key={ix} style={{ color: "grey" }}>
                {todo.body}
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
