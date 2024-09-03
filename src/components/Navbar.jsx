import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1></h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/adduser">AddUser</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
