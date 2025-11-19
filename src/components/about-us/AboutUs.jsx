import React from "react";
import "./style.css";
import MeetTheMaker from "./MeetTheMaker";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>About Gazelle Beads</h1>
          <p>
            Gazelle Beads prides itself in making exclusive handmade bead
            designs that reflect elegance, creativity, and culture. Each piece
            is carefully crafted to tell a story — bold enough to stand out, yet
            refined enough to complement your unique style.
          </p>
          <p>
            From intricate jewelry to elegant bags, waist belts, and purses,
            every Gazelle Beads creation celebrates artistry, beauty, and
            individuality. We believe that fashion is more than just adornment —
            it’s a form of expression.
          </p>
          <h3 className="about-tagline">Bold. Beautiful. Beaded.</h3>
        </div>

        <div className="about-image">
          <img src="src/assets/logo.jpg" alt="Handmade bead jewelry" />
        </div>
      </div>

      <div className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>
              “The detail in every beadwork is stunning! I always get
              compliments when I wear Gazelle Beads jewelry.”
            </p>
            <h4>— Sarah O.</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “I ordered a custom waist belt, and it was even more beautiful
              than I imagined. Truly handmade perfection!”
            </p>
            <h4>— Ada M.</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “Top-quality designs with a touch of elegance. Gazelle Beads never
              disappoints!”
            </p>
            <h4>— Tolu A.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
