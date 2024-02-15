import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';

function ParallaxImage({ backgroundImage, children }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: `center calc(50% + ${scrollPosition * 0.2}px)`,
    backgroundRepeat: 'no-repeat',
    transition: 'background-position 0.3s ease-out',
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container style={containerStyle} className="d-flex align-items-center justify-content-center h-100 flex-grow-1 text-white">
      {children}
    </Container>
  );
}

export default ParallaxImage;
