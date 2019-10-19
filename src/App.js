import React from "react";
import NavBar from "../src/components/NavBar";
import UserForm from "../src/components/UserForm";
import Home from "../src/components/Home";
import { Router, Link } from "@reach/router";
import DisplayUsers from "../src/components/DisplayUsers";
import EditUser from "../src/components/EditUser";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  margin: 0;
}
  body {
    margin: 0;
    @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:300,400,700&display=swap');
    font-family: 'Red Hat Display', sans-serif;
    background-color: #F6FFFF;
    font-weight: light;

    h1, h2, h3, a{
      font-weight: 300;
      margin: 0;
    }
  }
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: auto;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <NavBar />
      <Router>
        <Home path="/" />
        <UserForm path="addusers" />
        <DisplayUsers path="/viewusers" />
        <EditUser path="/edituser" />
      </Router>
    </AppContainer>
  );
};

export default App;
