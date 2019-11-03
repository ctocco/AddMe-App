import React, { PureComponent } from "react";
import { delete_user, edit_user } from "../../redux/action_creators/actions";
import styled from "styled-components";
import OptionButton from "../../assets/icons/optionButton.svg";
import { connect } from "react-redux";

const UserContainer = styled.ul`
  background: white;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr;
  grid-gap: 5px;
  margin: 0;
`;

const List = styled.li`
  margin: 10px;
  list-style: none;
  margin: 0;
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
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

  hideDropdownMenu = () => {
    this.setState({ displayMenu: !this.state.displayMenu });
  };

  handleChange = e => {
    if (e.target.innerHTML === "Edit User")
      this.props.dispatch(edit_user(this.props.id));
    if (e.target.innerHTML === "Delete User")
      this.props.dispatch(delete_user(this.props.id));
    this.hideDropdownMenu();
  };

  render() {
    return (
      <>
        <UserContainer>
          <List>{this.props.id}</List>
          <List>{this.props.name}</List>
          <List>{this.props.password}</List>
          <List>{this.props.email}</List>
        </UserContainer>
        <Dropdown>
          <img src={OptionButton} onClick={this.showDropdownMenu} />
          {this.state.displayMenu ? (
            <DropdownContent>
              <button value="edit" onClick={e => this.handleChange(e)}>
                Edit User
              </button>
              <button value="delete" onClick={this.handleChange}>
                Delete User
              </button>
            </DropdownContent>
          ) : null}
        </Dropdown>
      </>
    );
  }
}

export default connect()(User);
