import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutContent from '../components/AboutContent';
import ScrollTop from '../components/ScrollTop';

const About = () => {
  return (
    <div>
      <Navbar />
      <Header content={{ heading: 'About Me', text: 'Passionate developer...' }} />
      <AboutContent />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default About