import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link className='flexItemNav' to='/'>HOME</Link>
      <Link className='flexItemNav' to='/about'>ABOUT</Link>
      <Link className='flexItemNav' to='/projects'>PROJECTS</Link>
      <Link className='flexItemNav' to='/contact'>CONTACT</Link>
    </nav>
  );
};

export default Navigation;
