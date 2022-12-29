import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer>
      <Typography id='pFooter' variant='body1'>ALEXANDER STOISOLOVICH &copy; 2022</Typography>
      <a href='https://github.com/Alexander512'>
        <img className='link' src='images/GitHub-Mark-Light-32px.png' alt='GitHub logo acting as a link' />
      </a>
      <a href='https://www.linkedin.com/in/alexander-stoisolovich/'>
        <img className='link' src='images/LI-In-Bug.png' alt='LinkedIn logo acting as a link' />
      </a>
    </footer>
  );
};

export default Footer;
