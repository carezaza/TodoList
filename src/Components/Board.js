import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  border-radius: 3px;
  width: 100%;
  max-width: 650px;
  height: 500px;
  margin: 20px 0;
`;

const Header = styled.div`
  text-align: center;
  padding: 10px;
  border-radius: 3px 3px 0 0;
  background-color: #33a6df;
  font-weight: 600;
  font-size: 16px;
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
      <Header>Just do it.</Header>
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
