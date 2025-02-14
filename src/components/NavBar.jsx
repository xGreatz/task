import React from "react";
import { NavLink } from "react-router-dom";
import NASA from "./NASA";

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px", color: "#fff" }}>
      <NASA />

      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-task"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Add Task
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/archive"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Archive
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
