import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const WelcomeContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-left: 25px;
  border: 1px solid red;
  h1 {
    align-self: end;
    border: 1px solid red;
    font-size: 3rem;
  }
  h3 {
    font-size: 2.5rem;
  }
`;

const SelectorContainer = styled.div`
  display: grid;
  justify-content: flex-end;
  grid-template-rows: 1fr 1fr;
  h1 {
    align-self: end;
    margin: 0 50px 0 0;
  }
  div {
    justify-self: end;
    margin: 10px 10px 0 0;
  }
`;

const Body = styled.body`
  border-top: 1px solid grey;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <WelcomeContainer>
          <h1>WELCOME</h1>
          <h3>Admin</h3>
        </WelcomeContainer>
        <SelectorContainer>
          <div>
            <select>
              <option>English</option>
              <option>German</option>
            </select>
          </div>
          <h1>Good Morning</h1>
        </SelectorContainer>
      </Header>
      <Body></Body>
    </HomeContainer>
  );
};

export default Home;
