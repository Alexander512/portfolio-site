import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';

const Navigation = () => {
  return (
    <nav>
      <Link component={RouterLink} sx={{color: '#4D73FF', marginInlineStart: '1.5vw', textDecoration: 'none'}} to='/'>
        HOME
      </Link>
      <Link component={RouterLink} sx={{color: '#4D73FF', marginInlineStart: '1.5vw', textDecoration: 'none'}} to='/about'>
        ABOUT
      </Link>
      <Link component={RouterLink} sx={{color: '#4D73FF', marginInlineStart: '1.5vw', textDecoration: 'none'}} to='/projects'>
        PROJECTS
      </Link>
      <Link component={RouterLink} sx={{color: '#4D73FF', marginInlineStart: '1.5vw', textDecoration: 'none'}} to='/contact'>
        CONTACT
      </Link>
    </nav>
  );
};

export default Navigation;
