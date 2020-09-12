import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";

function App() {
  //variable
  const [todos, setTodos] = useState([
    { text: "Finish plus project", isCompleted: false },
    { text: "Fedd peggy", isCompleted: false },
    { text: "Sleep", isCompleted: false },
  ]);

  //methods
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const unCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //template
  return (
    <div className="app">
      <div className="todo-list">
        <h1>My todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            index={index}
            completeTodo={completeTodo}
            unCompleteTodo={unCompleteTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>    
  );
}

export default App;