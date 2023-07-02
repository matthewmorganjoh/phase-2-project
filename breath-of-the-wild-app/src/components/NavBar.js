import React from "react";
import { NavLink } from "react-router-dom";

const navStyles = {
  display: "flex",
  justifyContent: "center",
};

const linkStyles = {
  display: "inline-block",
  width: "60px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div style={navStyles}>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/monsters"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Monsters
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
    </div>
  );
}

export default NavBar;
