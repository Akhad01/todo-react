import React from "react";
import Todo from "./Todo";

const TodoList = ({ lists, deleteTodo }) => {
  return (
    <div>
      {lists.map((element, index) => (
        <Todo
          key={index}
          element={element}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
