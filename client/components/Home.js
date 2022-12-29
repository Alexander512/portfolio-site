import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div id='container'>
      <Navigation />
      <Typography variant='h3' component='h1'>ALEXANDER STOISOLOVICH</Typography>
      <Typography sx={{marginInlineStart: '1.5vw', marginInlineEnd: '1.5vw'}} variant='body1'>
        FULLSTACK WEB APPLICATIONS / ANALYTICS
      </Typography>
      <Footer />
    </div>
  );
};

export default Home;
