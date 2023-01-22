import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Project from '../components/Project';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Header content={{ heading: 'Projects', text: 'See my works' }} />
      <Project />
      <Footer />
    </div>
  )
}

export default Projects