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
      : products.filter((item) => item.categories === activeCategory);

  const visibleItems = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  function splitWords(word) {
    if (word.length > 12) {
      return word.slice(0, 12) + "...";
    } else {
      return word;
    }
  }

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
              <div className="gallery-card-info mobile">
                <h3>{splitWords(product.name)}</h3>
              </div>
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
            <div className="product-name">
              <h2>{selectedProduct.name}</h2>
              {/* <p className="product-price">{selectedProduct.price}</p> */}
              <p className="product-price">
                {`₦${Number(selectedProduct.price).toLocaleString()}`}
              </p>
            </div>
            <p className="product-description">{selectedProduct.description}</p>

            <div className="modal-buttons">
              <button
                className="close-modal"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
              <button className="close-modal">
                <a
                  href={`https://wa.me/+2348089249747/?text=Hello%20i%20want%20to%20know%20more%20about%20this%20product%20${selectedProduct.name}`}
                  target="_blank"
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
