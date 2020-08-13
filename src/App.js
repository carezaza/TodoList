import React from "react";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 10px",  
        background: 'rgba(0,0,0,0.9)'
      }}
    >
      <h3 align="center" style={{color:'white'}}>TODO LIST</h3>
      <TodoList />
    </div>
  );
}

export default App;
