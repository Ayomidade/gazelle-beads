import React from "react";
import { Link } from "react-router-dom";
import "./cta.css";
import { useScroll } from "../../context/ScrollContext";

const CallToAction = () => {
  const { scrollToTop } = useScroll();

  const handleNav = () => {
    scrollToTop();
  };

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Join the Gazelle Experience</h2>
        <p>
          Every bead tells a story — yours could be next. Discover our latest
          handmade collections and embrace the beauty of bold, authentic design.
        </p>
        <Link to="/products" className="cta-button"onClick={handleNav}>
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
