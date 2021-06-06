import React, { Component } from "react";

// stateless functional component
// instead of having a class that extends component with a render method, it simply return a react element
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light ">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge rounded-pill bg-secondary ">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
