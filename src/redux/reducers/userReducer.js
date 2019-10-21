import { combineReducers } from "redux";

const INITIAL_STATE = [
  {
    id: 1,
    name: "claudio",
    password: "hello",
    email: "cl@combineReducers.com"
  },
  { id: 2, name: "claudio", password: "hello", email: "cl@combineRducers.com" }
];

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return [...state, action.payload];
    }
    case "DELETE_USER": {
      return state.filter(value => value.id !== action.payload);
    }
    case "EDIT_USER": {
      return state.map(user =>
        user.id === action.payload ? { ...user, editing: !user.editing } : user
      );
    }
    case "UPDATE_USER": {
      return state.map(user =>
        user.id === action.payload.id
          ? {
              ...user,
              name: action.payload.name,
              password: action.payload.password,
              email: action.payload.email,
              editing: !user.editing
            }
          : user
      );
    }
    default:
      return state;
  }
};

export default userReducer;
