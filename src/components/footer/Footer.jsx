import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useScroll } from "../../context/ScrollContext";

const Footer = () => {
  const { scrollToTop } = useScroll();

  const handleNav = () => {
    scrollToTop();
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Gazelle Beads</h2>
          <p>Bold. Beautiful. Beaded.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/" onClick={handleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={handleNav}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={handleNav}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={handleNav}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: gazellebeadshome@gmail.com</p>
          <p>Phone: +234 808 924 9747</p>
          <p>We deliver nationwide</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gazelle Beads. All rights reserved.</p>
        <p>Follow us on Instagram: @gazellebeads</p>
      </div>
    </footer>
  );
};

export default Footer;
