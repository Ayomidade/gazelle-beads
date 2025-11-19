import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Menu, X } from "lucide-react";
import { useScroll } from "../../context/ScrollContext";

const Navbar = () => {
  const { scrollToTop } = useScroll();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNav = () => {
     setMenuOpen(!menuOpen);
     scrollToTop();
  }

  return (
    <>
      <nav className="nav">
        <Link to="/">
          <h1 className="brand-name">Gazelle Beads</h1>
          {/* <img className="logo" src={logo} alt="Gazelle Beads" /> */}
        </Link>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`links ${menuOpen ? "active" : ""}`}>
          <Link to={"/"} onClick={handleNav}>
            Home
          </Link>
          <Link to={"/about-us"} onClick={handleNav}>
            About
          </Link>
          <Link to={"/products"} onClick={handleNav}>
            Products
          </Link>
          <Link to={"/contact-us"} onClick={handleNav}>
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
