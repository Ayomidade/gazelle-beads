import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useScroll } from "../../context/ScrollContext";

const Hero = () => {
  const { scrollToTop } = useScroll();

  const handleNav = () => {
    scrollToTop();
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bold. Beautiful. Beaded.</h1>
        <p>
          Discover exclusive handmade bead designs — each crafted with
          creativity, precision, and love. From elegant jewelry to statement
          bags, Gazelle Beads brings artistry to every accessory.
        </p>
        <Link to="/products" className="hero-btn" onClick={handleNav}>
          Explore Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
