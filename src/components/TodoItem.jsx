import React from "react";

export const TodoItem = ({ todo }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" className="checkbox" checked={todo.isDone} />
      <p style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.description}
      </p>
      <button className="button">Delete</button>
    </li>
  );
};
