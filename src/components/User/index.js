import React, { PureComponent } from "react";
import SelectForm from "./Select/index";
import { delete_user, edit_user } from "../../redux/action_creators/actions";
import styled from "styled-components";
import OptionButton from "../../assets/icons/optionButton.svg";
import { connect } from "react-redux";

const Ul = styled.ul`
  background: white;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  margin: 0;
`;

const List = styled.li`
  display: flex;
  margin: 10px;
  align-items: center;
  margin: 0;
`;

const CustomSelect = styled.div`
  border: 1px solid red;
  max-width: 60px;
  background-image: url(optionButton.svg);
  select {
    -webkit-appearance: none;
    border: 1px solid #fff;
  }
`;

class User extends PureComponent {
  constructor() {
    super();
    this.state = {
      displayMenu: false
    };
  }

  showDropdownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: !this.state.displayMenu });
  };

  handleChange = e => {
    if (e.target.innerHTML === "Edit User")
      this.props.dispatch(edit_user(this.props.id));
    if (e.target.innerHTML === "Delete User")
      this.props.dispatch(delete_user(this.props.id));
    this.hideDropdownMenu();
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: !this.state.displayMenu });
  };

  render() {
    return (
      <div>
        <Ul>
          <List>{this.props.id}</List>
          <List>{this.props.name}</List>
          <List>{this.props.password}</List>
          <List>{this.props.email}</List>
          <div
            className="dropdown"
            style={{ background: "red", width: "200px" }}
          >
            <div className="button" onClick={this.showDropdownMenu}>
              My Setting
            </div>
            {this.state.displayMenu ? (
              <ul>
                <li value="edit" onClick={e => this.handleChange(e)}>
                  Edit User
                </li>
                <li value="delete" onClick={this.handleChange}>
                  Delete User
                </li>
              </ul>
            ) : null}
          </div>
        </Ul>
      </div>
    );
  }
}

export default connect()(User);
