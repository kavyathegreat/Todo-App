import React from "react";
import TodoWrapper from "./components/TodoWrapper/TodoWrapper";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>The Todo-List</h1>
      <TodoWrapper />
    </div>
  );
};

export default App;
