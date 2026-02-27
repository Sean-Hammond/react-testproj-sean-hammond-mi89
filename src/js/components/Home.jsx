import React, { useState } from "react";
import { ToDoItem } from "./ToDoItem";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(["Read about React", "Do project"]);

  const validateInput = () => {
    if (inputValue === "") {
      return;
    }
    alert("Input is valid!");
  };

  const handleKeyDown = (e) => {
    if (e.key != "Enter") {
      return;
    }
    if (validateInput()) {
      alert("Input cannot be empty");
      return;
    }
    const newTodos = [...todos];
    newTodos.push(inputValue);
    setTodos(newTodos);
    setInputValue("");
  };

  const addTodo = () => {
    if (!validateInput()) {
      alert("Input cannot be empty!");
      return;
    }
    const newTodos = [...todos];
    newTodos.push(inoutValue);
    setInoutValue("");
    return;
  };

  return (
    <div className="text-center">
      <h1 className="mt-5">To-Do List</h1>
      <input
        type="text"
        className="mt-5 mb-3 w-50 mx-auto form-control"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="d-flex flex-column">
        {todos.map((todo, index) => (
          <ToDoItem todo={todo} key={index} />
        ))}
      </div>
      <h1>Value above: {inputValue}</h1>
      <button onClick={() => validateInput()} className="btn btn-danger">
        Validate
      </button>
    </div>
  );
};

export default Home;
