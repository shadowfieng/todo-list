import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
