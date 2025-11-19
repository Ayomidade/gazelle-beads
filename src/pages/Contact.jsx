import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ContactUs from '../components/contact/ContactUs'
import Footer from '../components/footer/Footer'
import ContactFAQ from '../components/contact/ContactFaq'

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactUs/>
      <ContactFAQ/>
      <Footer/>
    </>
  )
}

export default Contact