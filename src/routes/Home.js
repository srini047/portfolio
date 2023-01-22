import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from "../components/HeroImg";
import Project from "../components/Project";
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Project />
      <BlogPost />
      <Footer />
    </div>

  )
}

export default Home