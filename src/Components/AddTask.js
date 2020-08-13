import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const TaskInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputTodo = styled.input`
  border: 1px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-radius: 5px 0 0 0;
  outline: none;
  height: 35px;
  width: 250px;
  padding: 0 5px;

  &:focus {
    border: 1px solid #33a6df;
    border-bottom: 2px solid #33a6df;
  }
`;

const ButtonAdd = styled.button`
  height: 35px;
  padding: 0 10px;
  border: none;
  outline: none;
  cursor: pointer;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ccc;
  background-color: lightgreen;

  &:hover {
    border: 1px solid #33a6df;
    border-bottom: 2px solid #33a6df;
  }
`;

const TextEnter = styled.p`
  font-weight: 600;
  margin: 10px 0;
  color: white;
`;

function AddTask() {
  const [todo, setTodo] = React.useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (todo.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: todo,
      });
      setTodo("");
    }
  };

  return (
    <TaskInputContainer>
      <TextEnter>Enter your task</TextEnter>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <InputTodo value={todo} onChange={(e) => setTodo(e.target.value)} />
        <ButtonAdd onClick={handleClick}>ADD</ButtonAdd>
      </div>
    </TaskInputContainer>
  );
}

export default AddTask;
