import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Header content={{ heading: 'Contact me', text: 'React out without hesitation' }} />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact