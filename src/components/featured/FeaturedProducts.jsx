import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import data from "../../context/products.json";

// const products = [
//   {
//     id: 1,
//     name: "Royal Blue Necklace Set",
//     image: "https://placehold.co/200",
//   },
//   {
//     id: 2,
//     name: "Gold Crystal Handbag",
//     image: "https://placehold.co/200",
//   },
//   {
//     id: 3,
//     name: "Elegant Bead Purse",
//     image: "https://placehold.co/200",
//   },
//   {
//     id: 4,
//     name: "Pearl Waist Belt",
//     image: "https://placehold.co/200",
//   },
//   {
//     id: 5,
//     name: "Classic Bead Bracelet",
//     image: "https://placehold.co/200",
//   },
//   {
//     id: 6,
//     name: "Statement Jewelry Set",
//     image: "https://placehold.co/200",
//   },
// ];

const FeaturedProducts = () => {
  const products = data.slice(0, 5);

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="showcase">
      <h2 className="section-title">Featured Creations</h2>
      <p className="section-subtitle">
        Each design tells a story — handmade, bold, and beautifully unique.
      </p>

      <div className="masonry-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="masonry-item"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} loading="lazy" />

            {/* FOR MOBILE */}
            <div className="mobile-overlay">
              <h3>{product.name}</h3>
            </div>

            {/* FOR DESKTOP VIEW */}
            <div className="overlay">
              <p>{product.name}</p>
              <Link to={"/products"} className="view-btn">
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>

            <div className="modal-buttons">
              <button
                className="close-modal"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
              <button className="chat-btn">
                <a
                  href={`https://wa.me/+2348089249747/${selectedProduct.name}`}
                >
                  Continue to chat
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
