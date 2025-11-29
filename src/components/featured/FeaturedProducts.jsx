import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import data from "../../context/products.json";
import { useScroll } from "../../context/ScrollContext";

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
  const products = data.slice(0, 3);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const { scrollToTop } = useScroll();

  const handleNav = () => {
    scrollToTop();
  };

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
            <div className="img">
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>

            {/* FOR MOBILE */}
            <div className="mobile-overlay">
              <h3>{product.name}</h3>
            </div>

            {/* FOR DESKTOP VIEW */}
            <div className="overlay">
              <p>{product.name}</p>
              {/* <Link to={"/products"} className="view-btn">
                View Product
              </Link> */}
              <button className="order-btn">
                <a
                  href={`https://wa.me/+2348089249747/?text=Hello%20i%20want%20to%20know%20more%20about%20this%20product%20${product.name}`}
                  target="_blank"
                >
                  Place Order
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link to={"/products"} className="more-products-btn" onClick={handleNav}>
        View more products
      </Link>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <div className="product-name">
              <h2>{selectedProduct.name}</h2>
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
    </section>
  );
};

export default FeaturedProducts;
