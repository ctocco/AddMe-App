import React, { PureComponent } from "react";
import { delete_user, edit_user } from "../../redux/action_creators/actions";
import styled from "styled-components";
import { connect } from "react-redux";

const Ul = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 1fr 1fr;
  width: 90%;
  margin: 0;
  height: 2rem;
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
  height: 3rem;
`;
const Edit = styled.button`
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
  height: 3rem;
`;

const List = styled.li`
  display: flex;
  margin: 10px;
  width: 100%;
  align-items: center;
  margin: 0;
  border: 1px solid red;
  height: 100%;
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
          <Edit onClick={() => this.props.dispatch(edit_user(this.props.id))}>
            Edit User
          </Edit>
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
