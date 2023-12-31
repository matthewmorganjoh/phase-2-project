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
  background-color: #d9a432;
  text-decoration: none;
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ba8d04;
  }

  &.active {
    background-color: #ba8d04;
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
        to="/request"
        exact
        activeClassName="active"
      >
        Request
      </NavItem>
    </NavContainer>
  );
}

export default NavBar;