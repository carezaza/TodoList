import React from "react";
import Board from "./Board";
import Card from "./Card";
import styled from "styled-components";

const TodoListContainer = styled.div`
  padding: 20px;
`;
function TodoList() {
  return (
    <TodoListContainer>
      <Board>
        <Card>T</Card>
        <Card>T</Card>
      </Board>
    </TodoListContainer>
  );
}

export default TodoList;
