import React from "react";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 0",  
      }}
    >
      <h3 align="center">TODO LIST</h3>
      <TodoList />
    </div>
  );
}

export default App;
