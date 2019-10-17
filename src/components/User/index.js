import React, { PureComponent } from "react";
import { delete_user, edit_user } from "../../redux/action_creators/actions";
import styled from "styled-components";
import { connect } from "react-redux";

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const Delete = styled.button`
  -webkit-appearance: none;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background-color: red;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: white;
  font-family: inherit;
  font-size: 1rem;
  text-decoration: none;
`;

const List = styled.li`
  display: flex;
  margin: 0 10px;
  width: 100%;
  align-items: center;
  padding: 0 5px;
`;

class User extends PureComponent {
  render() {
    return (
      <div>
        <Ul>
          <List>{this.props.id}</List>
          <List>{this.props.name}</List>
          <List>{this.props.password}</List>
          <List>{this.props.email}</List>
          <button onClick={() => this.props.dispatch(edit_user(this.props.id))}>
            Edit User
          </button>
          <Delete
            onClick={() => this.props.dispatch(delete_user(this.props.id))}
          >
            Delete User
          </Delete>
        </Ul>
      </div>
    );
  }
}

export default connect()(User);
