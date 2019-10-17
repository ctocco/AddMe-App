import React from "react";
import UserForm from "../src/components/UserForm";
import { Router, Link } from "@reach/router";
import DisplayUsers from "../src/components/DisplayUsers";
import EditUser from "../src/components/EditUser";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background: #e8b7a2;
  height: 50px;
  align-items: center;
`;

const App = () => {
  return (
    <div className="App">
      <Nav>
        <Link to="/">
          <h3>Admin</h3>
        </Link>{" "}
        | <Link to="displayusers">Display Users</Link>
      </Nav>
      <Router>
        <UserForm path="/" />
        <DisplayUsers path="/displayusers" />
        <EditUser path="/edituser/:id" />
      </Router>
    </div>
  );
};

export default App;
