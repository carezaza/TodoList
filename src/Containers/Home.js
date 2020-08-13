import React from "react";
import styled from "styled-components";
import TodoList from "../Components/TodoList";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

function Home() {
  return (
    <HomeContainer>
      <TodoList />
    </HomeContainer>
  );
}

export default Home;
