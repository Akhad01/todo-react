import React, { useState } from "react";
import styles from "./TodoContainer.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [lists, setList] = useState([]);
  function addArray(text) {
    console.log(text);
    setList([...lists, text]);
  }

  function deleteTodoHandler(index) {
    setList(lists.filter((_, idx) => idx !== index));
  }

  return (
    <div className={styles.todoFormContainer}>
      <TodoForm addArray={addArray} />
      <TodoList lists={lists} deleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default TodoContainer;
