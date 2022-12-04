import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>ALEXANDER STOISOLOVICH &copy; 2022</p>
      <a href='https://github.com/Alexander512'>
        <img src='images/GitHub-Mark-Light-32px.png' alt='GitHub logo acting as a link' />
      </a>
      <a href='https://www.linkedin.com/in/alexander-stoisolovich/'>
        <img src='images/LI-In-Bug.png' alt='LinkedIn logo acting as a link' />
      </a>
    </footer>
  );
};

export default Footer;
