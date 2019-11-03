import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import AdminPic from "../../assets/img/AdminPic.png";
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
  grid-gap: 5px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  background: #ddd;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const NavLink = styled.div`
  display: flex;
  color: white;
  align-items: center;
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
          <img src={AdminPic} alt={"placeholder of a key"} />
        </Circle>
        <h1 data-testid="h1">Admin</h1>
      </LogoContainer>

      <LinksContainer>
        <Link to="/">
          <NavLink>
            <img src={home} alt={"icon of home button"} />
            <div>Home</div>
          </NavLink>
        </Link>
        <Link to="/viewusers">
          <NavLink>
            <img src={view_users} alt={"icon of view users button"} />
            <div>View Users</div>
          </NavLink>
        </Link>
        <Link to="/addusers">
          <NavLink>
            <img src={add_user} alt={"icon of add user button"} />
            <div>Add Users</div>
          </NavLink>
        </Link>
      </LinksContainer>

      <div>Rest</div>
    </Nav>
  );
};

export default NavBar;
