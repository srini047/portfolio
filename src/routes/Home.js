import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from "../components/HeroImg";
import Project from "../components/Project";
// import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Project />
      {/* <Blog /> */}
      <Footer />
    </div>

  )
}

export default Home