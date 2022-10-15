import React, { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addArray }) => {
  const [todo, setTodo] = useState("");
  function onSubmit(event) {
    event.preventDefault();
    addArray(todo);
    setTodo("");
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write a task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
