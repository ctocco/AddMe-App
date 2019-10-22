import React, { Component } from "react";
// import { Link } from "@reach/router";
import styled from "styled-components";
import { update_user } from "../../redux/action_creators/actions";
import { connect } from "react-redux";

const Input = styled.input`
  -webkit-appearance: none;
  background: none;
  border: 0;
  font-family: inherit;
  margin: 5px;
  padding: 2px 3px;
  height: 30px;
  font-size: 1rem;
  border: 2px solid #c8ccd4;
  border-radius: 5px;
  color: #223254;
  &:focus {
    background: none;
    outline: none;
  }
  &:hover {
    background: #f2f2f2;
    transition: background-color 500ms ease-in-out;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &input:-webkit-autofill:focus,
  &textarea:-webkit-autofill,
  &textarea:-webkit-autofill:hover,
  &textarea:-webkit-autofill:focus,
  &select:-webkit-autofill,
  &select:-webkit-autofill:hover,
  &select:-webkit-autofill:focus {
    -webkit-text-fill-color: #333;
    -webkit-box-shadow: 0 0 0px 1000px #f2f2f2 inset;
    box-shadow: 0 0 0px 1000px #f2f2f2 inset;
  }
`;

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.nameInput = React.createRef();
    this.passwordInput = React.createRef();
    this.emailInput = React.createRef();
  }

  handleUpdate = e => {
    e.preventDefault();
    let newName = this.nameInput.current.value;
    let newPassword = this.passwordInput.current.value;
    let emailInput = this.emailInput.current.value;
    let data = {
      name: newName,
      password: newPassword,
      email: emailInput,
      id: this.props.id
    };
    this.props.dispatch(update_user(data));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleUpdate}>
          <Input
            id="name"
            ref={this.nameInput}
            placeholder="name"
            defaultValue={this.props.name}
            required
          />
          <Input
            id="password"
            ref={this.passwordInput}
            placeholder="password"
            defaultValue={this.props.password}
            required
          />
          <Input
            id="email"
            ref={this.emailInput}
            placeholder="email"
            defaultValue={this.props.email}
            type="email"
            required
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditUser);
