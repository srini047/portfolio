import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Header content={{ heading: 'Contact me', text: 'React out without hesitation' }} />
      <Footer />
    </div>
  )
}

export default Contact