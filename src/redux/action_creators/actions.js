import {
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  UPDATE_USER
} from "../constants/action_types";

let user = 0;

export function add_user(user_details) {
  user_details.id = user++;
  return {
    type: ADD_USER,
    payload: user_details
  };
}

export function edit_user(id) {
  return {
    type: EDIT_USER,
    payload: id
  };
}

export function delete_user(id) {
  return {
    type: DELETE_USER,
    payload: id
  };
}

export function update_user(new_data) {
  return {
    type: UPDATE_USER,
    payload: new_data
  };
}
