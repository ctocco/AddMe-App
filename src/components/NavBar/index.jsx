import React from "react";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import key from "../../assets/icons/key.svg";
import home from "../../assets/icons/home.svg";
import add_user from "../../assets/icons/add_user.svg";
import view_users from "../../assets/icons/view_users.svg";

const Nav = styled.nav`
  display: grid;
  background: #39555b;
  grid-template-columns: auto;
  grid-template-rows: 200px 200px auto;
`;

const NavLink = styled.a`
  color: white;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  background: #ddd;
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

const NavBar = () => {
  return (
    <Nav>
      <div>
        <Circle>
          <img src={key} />
        </Circle>
      </div>
      <div>
        <h1>Links</h1>
        <Link to="/">
          <NavLink>Home</NavLink>
        </Link>
        |{" "}
        <Link to="/displayusers">
          <NavLink>View Users</NavLink>
        </Link>
        <Link to="/addusers">
          <NavLink> Add Users</NavLink>
        </Link>
      </div>
      <div>Rest</div>
    </Nav>
  );
};

export default NavBar;
