import React from "react";
import NavBar from "../src/components/NavBar";
import UserForm from "../src/components/UserForm";
import Home from "../src/components/Home";
import { Router, Link } from "@reach/router";
import DisplayUsers from "../src/components/DisplayUsers";
import EditUser from "../src/components/EditUser";
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: auto;
  border: 1px red solid;
`;

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      <Router>
        <Home path="/" />
        <UserForm path="addusers" />
        <DisplayUsers path="/displayusers" />
        <EditUser path="/edituser" />
      </Router>
    </AppContainer>
  );
};

export default App;
