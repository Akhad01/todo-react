import React, { useState } from "react";
import styles from "./Todo.module.css";
import { HiOutlineX } from "react-icons/hi";

const Todo = ({ element, deleteTodo, index }) => {
  const [checked, setChecked] = useState(false);

  const styleHr = {
    backgroundColor: "#F5CDCA",
    border: "none",
    color: "red",
    height: "1.5px",
  };

  return (
    <>
      <div className={styles.todoItem}>
        <input
          className={styles.checkbox}
          id={`check-${index}`}
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        ></input>
        <label
          className={`${styles.text} ${checked ? styles.completedTodo : ""}`}
          htmlFor={`check-${index}`}
        >
          {element}
        </label>
        <HiOutlineX
          className={styles.deleteIcon}
          onClick={() => deleteTodo(index)}
        />
      </div>
      <hr
        style={
          checked
            ? styleHr
            : {
                border: "none",
                backgroundColor: "#E8E6E8",
                height: "1.5px",
              }
        }
      />
    </>
  );
};

export default Todo;
