import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 650px;
  height: 500px;
  margin: 20px 0;
`;

const Header = styled.div`
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: #33a6df;
  font-weight: 600;
  font-size: 20px;
  color: white;
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
