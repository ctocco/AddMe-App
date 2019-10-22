import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import key from "../../assets/icons/key.svg";
import home from "../../assets/icons/home.svg";
import add_user from "../../assets/icons/add_user.svg";
import view_users from "../../assets/icons/view_users.svg";

const Nav = styled.nav`
  display: grid;
  background: #39555b;
  grid-template-columns: auto;
  grid-template-rows: 200px 200px 600px;
`;

const LogoContainer = styled.div`
  display: grid;
  grid-temlate-columns: 1fr;
  grid-template-rows: 150px auto;
  justify-content: center;
  text-align: center;
  align-content: center;
  color: white;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  background: #ddd;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const NavLink = styled.a`
  color: white;
  padding-left: 10px;
`;

const LinksContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  border-top: 1px solid white;
  padding: 20px;
  justify-content: center;
`;

const NavBar = () => {
  return (
    <Nav>
      <LogoContainer>
        <Circle>
          <img src={key} alt={"placeholder of a key"} />
        </Circle>
        <h1>Admin</h1>
      </LogoContainer>

      <LinksContainer>
        <Link to="/">
          <img src={home} alt={"icon of home button"} />
          <NavLink>Home</NavLink>
        </Link>
        <Link to="/viewusers">
          <img src={view_users} alt={"icon of view users button"} />
          <NavLink>View Users</NavLink>
        </Link>
        <Link to="/addusers">
          <img src={add_user} alt={"icon of add user button"} />
          <NavLink>Add Users</NavLink>
        </Link>
      </LinksContainer>

      <div>Rest</div>
    </Nav>
  );
};

export default NavBar;
