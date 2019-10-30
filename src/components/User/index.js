import React, { PureComponent } from "react";
import { delete_user, edit_user } from "../../redux/action_creators/actions";
import styled from "styled-components";
import OptionButton from "../../assets/icons/optionButton.svg";
import { connect } from "react-redux";

const Ul = styled.ul`
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
      <React.Fragment>
        <Ul>
          <List>{this.props.id}</List>
          <List>{this.props.name}</List>
          <List>{this.props.password}</List>
          <List>{this.props.email}</List>
        </Ul>
        <div className="dropdown">
          <div className="button" onClick={this.showDropdownMenu}>
            <img src={OptionButton} />
          </div>
          {this.state.displayMenu ? (
            <ul>
              <List value="edit" onClick={e => this.handleChange(e)}>
                Edit User
              </List>
              <List value="delete" onClick={this.handleChange}>
                Delete User
              </List>
            </ul>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(User);
