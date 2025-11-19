import React from "react";
import "./maker.css";

const MeetTheMaker = () => {
  return (
    <section className="meet-the-maker">
      <div className="maker-content">
        <div className="maker-text">
          <h2>Meet the Maker</h2>
          <p>
            Every Gazelle Beads design starts with a spark of inspiration —
            colors, culture, and creativity woven into every detail. Behind each
            handmade piece is a story of passion and precision.
          </p>
          <p>
            Our founder and lead designer, <strong>Grace Adewale</strong>,
            brings years of artistry and innovation into every creation. Her
            hands transform simple beads into bold, elegant statements that
            celebrate individuality.
          </p>
          <p className="tagline">Bold. Beautiful. Beaded.</p>
        </div>

        <div className="maker-video">
          <video
            src="src/assets/video.mp4"
            controls
            poster="flier.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default MeetTheMaker;
