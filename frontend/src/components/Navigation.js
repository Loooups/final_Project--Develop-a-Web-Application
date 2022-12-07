import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/admin">
          <li>Admin</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
