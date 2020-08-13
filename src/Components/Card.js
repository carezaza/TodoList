import React from "react";
import styled from "styled-components";

const CardTodo = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ccc;
  background-color: #f3f3f3;
  padding: 10px;
`;

const ButtonCard = styled.button`
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: #f3f3f3;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const TodoText = styled.p`
  font-size: 18px;
  margin: 0;
`;

function Card({ children }) {
  return (
    <CardTodo>
      <TodoText>{children}</TodoText>
      <ButtonContainer>
        <ButtonCard>✔</ButtonCard> <ButtonCard>❌</ButtonCard>
      </ButtonContainer>
    </CardTodo>
  );
}

export default Card;
