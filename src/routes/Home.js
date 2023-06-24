import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from "../components/HeroImg";
import Project from "../components/Project";
// import Blog from '../components/Blog';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Project />
      {/* <Blog /> */}
      <Timeline />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default Home