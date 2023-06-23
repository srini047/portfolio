import React from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import './ScrollTop.css';

class ScrollToTopButton extends React.Component {
  state = {
    isScrollVisible: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { isScrollVisible } = this.state;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (!isScrollVisible && scrollTop > 0) {
      this.setState({ isScrollVisible: true });
    } else if (isScrollVisible && scrollTop === 0) {
      this.setState({ isScrollVisible: false });
    }
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const { isScrollVisible } = this.state;

    return (
      <div className={`scroll-to-top ${isScrollVisible ? 'visible' : ''}`} onClick={this.scrollToTop}>
        <FaArrowAltCircleUp className="scroll-to-top-icon" />
      </div>
    );
  }
}

export default ScrollToTopButton;
