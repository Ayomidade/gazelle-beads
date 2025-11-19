import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Products from '../pages/Products'

const AppRoute = () => {
  return (
    <>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </>
  );
}

export default AppRoute