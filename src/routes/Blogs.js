import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BlogPost from '../components/BlogPost';

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <Header content={{ heading: 'Blogs', text: 'See my published writings' }} />
      <BlogPost />
      <Footer />
    </div>
  )
}

export default Blogs