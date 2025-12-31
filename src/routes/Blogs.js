import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Blog from '../components/Blog';
import ScrollTop from '../components/ScrollTop';

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <Header content={{ heading: 'Blogs', text: 'See my published articles' }} />
      <Blog />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default Blogs