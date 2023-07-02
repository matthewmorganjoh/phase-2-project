import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 5px;
`;

const NavItem = styled(NavLink)`
  display: inline-block;
  padding: 12px;
  margin: 0 6px 6px;
  background-color: gold;
  text-decoration: none;
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkblue;
  }

  &.active {
    background-color: darkblue;
  }
`;

function NavBar() {
  return (
    <NavContainer>
      <NavItem
        to="/"
        exact
        activeClassName="active"
      >
        Home
      </NavItem>
      <NavItem
        to="/monsters"
        exact
        activeClassName="active"
      >
        Monsters
      </NavItem>
      <NavItem
        to="/login"
        exact
        activeClassName="active"
      >
        Login
      </NavItem>
    </NavContainer>
  );
}

export default NavBar;
