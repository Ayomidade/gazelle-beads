import React, { useRef, useState } from "react";
import "./style.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_mk30zpf", // replace with your EmailJS service ID
        "template_vqcfq9d", // replace with your EmailJS template ID
        form.current,
        "ZVo9AeFHkfR9kFQkx" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 4000); // reset success message after 4s
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Oops! Something went wrong. Try again later.");
          // <p>Oops! Something went wrong. Try again later.</p>;
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>
          We’d love to hear from you! Whether you’re placing a custom order,
          requesting a collaboration, or just saying hello — reach out and let’s
          create something beautiful together.
        </p>
      </div>

      <div className="contact-content">
        {/* Left: Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <select name="subject">
            <option value="">Select Subject</option>
            <option value=" order">Place an Order</option>
            <option value="custom_design">Custom Design</option>
            <option value="collaboration">Collaboration</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Animation */}
          {sent && (
            <div className="sent-message">
              <div className="checkmark">✔</div>
              <p>Your message has been sent successfully!</p>
            </div>
          )}
        </form>

        {/* Right: Info */}
        <div className="contact-info">
          <h3>Reach Us Directly</h3>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+234 808 924 9747">+234 808 924 9747</a>
          </p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:gazellebeadshome@gmail.com">
              gazellebeadshome@gmail.com
            </a>
          </p>
          <p>
            <strong>Location:</strong> Lagos, Nigeria
          </p>
          <p>
            <strong>Hours:</strong> Mon–Fri, 9am – 5pm
          </p>

          <div className="social-links">
            <div className="link">
              <FaInstagram />
              <a
                href="https://www.instagram.com/gazellebeads/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="link">
              <FaFacebook />
              <a
                href="https://www.facebook.com/share/1AFK35mXqY/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div className="link">
              <FaWhatsapp />
              <a
                href="https://wa.me/+2348089249747"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
