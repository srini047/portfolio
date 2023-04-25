import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Form from '../components/Form';
import ScrollTop from '../components/ScrollTop';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Header content={{ heading: 'Contact me', text: 'React out without hesitation' }} />
      <Form />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default Contact