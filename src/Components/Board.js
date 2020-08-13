import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ebecf0;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 400px;
  height: 500px;
  margin: 10px;
`;

const Header = styled.div`
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: lightgreen;
  font-weight: 600;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

function Board({ children, onDrop, name }) {
  return (
    <Container>
      <Header>TODO</Header>
      <TodoContainer
        name={name}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => e.preventDefault()}
      >
        {children}
      </TodoContainer>
    </Container>
  );
}

export default Board;
