import React, { PureComponent } from "react";
import { delete_user, edit_user } from "../../redux/action_creators/actions";
import styled from "styled-components";
import OptionButton from "../../assets/icons/optionButton.svg";
import { connect } from "react-redux";

const Ul = styled.ul`
  background: white;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr 0.5fr;
  grid-gap: 5px;
  margin: 0;
`;

const Delete = styled.button`
  -webkit-appearance: none;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background-color: red;
  border-radius: 6px;
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
  // border: 1px solid #dcdcdc;
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
  align-items: center;
  margin: 0;
`;

class User extends PureComponent {
  handleChange = e => {
    if (e.target.value === "edit")
      this.props.dispatch(edit_user(this.props.id));
    if (e.target.value === "delete")
      this.props.dispatch(delete_user(this.props.id));
  };
  render() {
    return (
      <div>
        <Ul>
          <List>{this.props.id}</List>
          <List>{this.props.name}</List>
          <List>{this.props.password}</List>
          <List>{this.props.email}</List>
          <img src={OptionButton} />
          <select src={OptionButton} onChange={this.handleChange}>
            <option> </option>
            <option value="edit">edit user</option>
            <option value="delete">Delete User</option>
          </select>
        </Ul>
      </div>
    );
  }
}

export default connect()(User);
