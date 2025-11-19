import React, { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "How long does it take to get a response?",
    answer:
      "We usually reply within 24 hours, but during weekends or holidays, it may take up to 48 hours.",
  },
  {
    question: "Do you create custom bead designs?",
    answer:
      "Yes! You can send us your preferred color or pattern idea, and we’ll design a custom piece just for you.",
  },
  {
    question: "Where are you located?",
    answer:
      "We’re based in Lagos, Nigeria — but we serve customers across the country and offer nationwide delivery.",
  },
  {
    question: "Do you offer bulk orders or collaborations?",
    answer:
      "Absolutely. For event souvenirs, corporate gifting, or creative collaborations, reach out through our contact form.",
  },
];

const ContactFAQ = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-toggle">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactFAQ;
