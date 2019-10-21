import React from "react";
import User from "../User";
import EditUser from "../EditUser";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Header = styled.header`
  border-bottom: 1px grey solid;
  grid-column: 1/4;
`;

const DisplayUserContainer = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
  grid-template-columns: 100px 1fr 1fr;
  justify-content: end;
  grid-row-gap: 20px;
`;

const UsersContainer = styled.div`
  width: 100%;
  border: 1px solid red;
  background: white;
  grid-column: 2/5;
`;

const DisplayUsers = () => {
  const users = useSelector(state => state.user);

  return (
    <DisplayUserContainer>
      <Header>hello</Header>
      {users.map(user => (
        <UsersContainer key={user.id}>
          {user.editing ? (
            <EditUser
              key={user.id}
              id={user.id}
              name={user.name}
              password={user.password}
              email={user.email}
            />
          ) : (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              password={user.password}
              email={user.email}
            />
          )}
        </UsersContainer>
      ))}
    </DisplayUserContainer>
  );
};

export default DisplayUsers;
