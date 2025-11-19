import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bold. Beautiful. Beaded.</h1>
        <p>
          Discover exclusive handmade bead designs — each crafted with
          creativity, precision, and love. From elegant jewelry to statement
          bags, Gazelle Beads brings artistry to every accessory.
        </p>
        <Link to="/products" className="hero-btn">
          Explore Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
