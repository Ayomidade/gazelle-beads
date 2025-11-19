import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import FeaturedProducts from "../components/featured/FeaturedProducts";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Footer/>
    </>
  );
};

export default Home;
