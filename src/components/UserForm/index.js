import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import { add_user } from "../../redux/action_creators/actions.js";
import styled from "styled-components";

const userSuccess = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "green"
  }
};

const emailFail = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "red"
  }
};

const Submit = styled.button`
  -webkit-appearance: none;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  background-color: #ededed;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #777777;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
`;

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

const UserForm = () => {
  const dispatch = useDispatch();
  const listOfUsers = useSelector(state => state.user);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [modalSucessIsOpen, setModalSuccessIsOpen] = useState(false);
  const [modalDuplicateEmailOpen, modalSetDuplicateEmailOpen] = useState(false);

  const saveUser = () => {
    if (listOfUsers.some(userEmail => userEmail.email === email)) {
      return duplicateEmail();
    }
    dispatch(add_user({ name, password, email, editing: false }));
    setName("");
    setEmail("");
    setPassword("");
    authenticate();
  };

  const duplicateEmail = () => {
    modalSetDuplicateEmailOpen(true);
    return setTimeout(() => modalSetDuplicateEmailOpen(false), 1000);
  };

  const authenticate = () => {
    setModalSuccessIsOpen(true);
    setTimeout(() => setModalSuccessIsOpen(false), 1000);
  };

  return (
    <div>
      <Modal
        isOpen={modalSucessIsOpen}
        ariaHideApp={false}
        style={userSuccess}
        contentLabel="User Successful"
      >
        User Succesfully Added
      </Modal>
      <Modal
        isOpen={modalDuplicateEmailOpen}
        ariaHideApp={false}
        style={emailFail}
        contentLabel="User Successful"
      >
        <h1>Duplicate Email</h1>
        Please Enter another Email
      </Modal>
      <h3>Add User</h3>
      <form
        onSubmit={event => {
          event.preventDefault();
          saveUser();
        }}
      >
        <Input
          id="name"
          value={name}
          placeholder="name"
          onChange={event => {
            setName(event.target.value);
          }}
          required
        />
        <Input
          id="password"
          value={password}
          placeholder="password"
          onChange={event => {
            setPassword(event.target.value);
          }}
          required
        />
        <Input
          id="email"
          value={email}
          placeholder="email"
          onChange={event => {
            setEmail(event.target.value);
          }}
          type="email"
          required
        />
        {/* <Link to={"/showUsers"}> */}
        <Submit type="submit">Submit</Submit>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default UserForm;
