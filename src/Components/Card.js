import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const CardTodo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin: 3px 10px;
  padding: 10px;
`;

const ButtonCard = styled.button`
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 0 1px;
  font-size: 14px;
  &:hover {
    background-color: #ccc;
  }
`;

const RightContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const TodoText = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${({ completed }) => (completed ? `grey` : `black`)};
  text-decoration: ${({ completed }) => (completed ? `line-through` : `none`)};
`;

const StatusText = styled.p`
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin: 0 5px;
  font-weight: 600;
  font-size: 12px;
  border-radius: 5px;
  background-color: ${({ completed }) =>
    completed ? `lightgreen` : `#0da8f4`};
`;

const InputEdit = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-radius: 5px 0 0 0;
  width: 100%;

  animation: expand 0.7s ease-out;

  @keyframes expand {
    from {
      transform: scaleX(0);
    }
  }
`;

function Card({ item }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = React.useState(false);
  const [todo, setTodo] = React.useState(item.todo);

  const onClickComplete = () => {
    dispatch({
      type: "EDIT_TODO",
      payload: { ...item, completed: !item.completed },
    });
  };

  const onClickDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: item.id,
    });
  };

  const EditTodo = () => {
    if (edit) {
      if (todo.trim()) {
        dispatch({
          type: "EDIT_TODO",
          payload: { ...item, todo },
        });
      } else {
        setTodo(item.todo);
      }
    }
    setEdit(!edit);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      EditTodo();
    }
  };

  const handleEdit = () => EditTodo();

  return (
    <CardTodo>
      {edit ? (
        <InputEdit
          ref={(input) => input && input.focus()}
          value={todo}
          onKeyPress={handleKeyPress}
          onChange={(e) => setTodo(e.target.value)}
        />
      ) : (
        <TodoText completed={item.completed}>{item.todo}</TodoText>
      )}
      <RightContainer>
        <StatusText completed={item.completed}>
          {item.completed ? "Completed" : "Doing..."}
        </StatusText>
        <ButtonCard onClick={handleEdit}>
          <span role="img" aria-label="edit">
            {edit ? `🆗` : `📃`}
          </span>
        </ButtonCard>
        <ButtonCard onClick={onClickComplete}>
          <span role="img" aria-label="completed">
            ✔
          </span>
        </ButtonCard>
        <ButtonCard onClick={onClickDelete}>
          <span role="img" aria-label="delete">
            ❌
          </span>
        </ButtonCard>
      </RightContainer>
    </CardTodo>
  );
}

export default Card;
