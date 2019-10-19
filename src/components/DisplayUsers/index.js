import React from "react";
import User from "../User";
import EditUser from "../EditUser";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

const DisplayUserContainer = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
`;

const UsersContainer = styled.div`
  border-top: 1px solid grey;
`;

const DisplayUsers = () => {
  const users = useSelector(state => state.user);

  return (
    <DisplayUserContainer>
      <div></div>
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
