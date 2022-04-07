import React from "react";
import { Link } from "gatsby";

const NavbarDetails = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-light justify-content-center border-bottom shadow-sm mb-4">
        <div className="nav-link fs-5 text-dark">
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDetails;
