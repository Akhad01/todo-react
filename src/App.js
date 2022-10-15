import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [lists, setList] = useState([]);
  function addArray(text) {
    if (!!text) {
      setList([...lists, text]);
    }
  }

  console.log(lists);

  function deleteTodoHandler(index) {
    setList(lists.filter((_, idx) => idx !== index));
  }
  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <TodoForm addArray={addArray} />
      <TodoList lists={lists} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
