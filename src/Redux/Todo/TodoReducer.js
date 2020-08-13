import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  todos: [],
};

const TodoReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            todo: payload,
            completed: false,
          },
        ],
      };
    case "DELETE_TODO":
      return { todos: state.todos.filter((todo) => todo.id !== payload) };
    case "EDIT_TODO":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return payload;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default TodoReducer;
