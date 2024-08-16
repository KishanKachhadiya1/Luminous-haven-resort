import React, { useState } from "react";
import logo from "../images/Luminous.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="navigation">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Luminous Logo" />
              </Link>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
              <li>
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li>
                <Link to="/room-info" onClick={toggleMenu}>Room Info</Link>
              </li>
              <li>
                <Link to="/service" onClick={toggleMenu}>Service</Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
