import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-light justify-content-center border-bottom shadow-sm mb-4">
        <div className="nav-link fs-5 text-dark">
          <Link to="#home" activeClassName="active">Home</Link>
          <Link to="#projects" activeClassName="active">Projects</Link>
          <Link to="#pricing" activeClassName="active">Pricing</Link>
          <Link to="#contact" activeClassName="active">Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
