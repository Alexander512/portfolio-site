import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link className='flexItemNav' to='/'>Home</Link>
      <Link className='flexItemNav' to='/about'>About</Link>
      <Link className='flexItemNav' to='/projects'>Projects</Link>
      <Link className='flexItemNav' to='/contact'>Contact</Link>
    </nav>
  );
};

export default Navigation;
