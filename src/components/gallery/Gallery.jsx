import React, { useState } from "react";
import "./style.css";
import data from "../../context/products.json";

const categories = [
  "All",
  "Jewelry",
  "Bags",
  "Bracelets",
  "Purses",
  "Waist Belts",
  "Custom Pieces",
];

// Temporary sample data (replace later)
const products = data;
const ITEMS_PER_PAGE = 6;

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE); // State for visible items

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((item) => item.category === activeCategory);

  const visibleItems = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleChat = () => {};

  return (
    <>
      <div className="gallery-container">
        <section className="gallery-header">
          <h1>Our Collection</h1>
          <p>
            Discover handmade jewelry, bags, accessories, and custom beadwork —
            crafted with precision and artistic flair.
          </p>
        </section>

        <section className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? "filter active" : "filter"}
            >
              {cat}
            </button>
          ))}
        </section>

        <section className="gallery-grid">
          {visibleItems.map((product) => (
            <div
              key={product.id}
              className="gallery-card"
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} alt={product.name} loading="lazy" />
              <div className="gallery-card-info">
                <h3>{product.name}</h3>
              </div>
            </div>
          ))}

          {visibleItems.length === 0 && (
            <p className="no-items">No items in this category.</p>
          )}
        </section>

        {/* LOAD MORE BUTTON */}
        {visibleCount < filteredProducts.length && (
          <div className="load-more-wrapper">
            <button className="load-more-btn" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
        
      </div>

      {/* ----- MODAL ----- */}
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
              <button className="close-modal">
                <a
                  href={`https://wa.me/+2348089249747/${selectedProduct.name}`}
                >
                  Place Order
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
