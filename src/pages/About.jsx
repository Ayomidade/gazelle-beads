import React from 'react'
import Navbar from '../components/navbar/Navbar'
import AboutUs from '../components/about-us/AboutUs'
import Footer from '../components/footer/Footer'
import MeetTheMaker from '../components/about-us/MeetTheMaker'
import CallToAction from '../components/about-us/CallToAction'

const About = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <MeetTheMaker />
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default About