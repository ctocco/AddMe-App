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

const DisplayUsers = () => {
  const users = useSelector(state => state.user);

  return (
    <Container>
      {users.map(user => (
        <div key={user.id}>
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
        </div>
      ))}
    </Container>
  );
};

export default DisplayUsers;
