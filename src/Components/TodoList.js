import React from "react";
import Board from "./Board";
import Card from "./Card";
import AddTask from "./AddTask";
import styled from "styled-components";

import { useSelector } from "react-redux";

const TodoListContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 10px 0;
`;

function TodoList() {
  const todos = useSelector((state) => state.todoReducer.todos);

  return (
    <TodoListContainer>
      <AddTask />
      <Board>
        {todos.map((todo) => (
          <Card key={todo.id} item={todo} />
        ))}
      </Board>
    </TodoListContainer>
  );
}

export default TodoList;
