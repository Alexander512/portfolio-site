import React from 'react';

import Typography from '@mui/material/Typography';

const Landing = () => {
  return (
    <div id='container'>
      <Typography sx={{fontSize: 'clamp(1em, 0.75em + 3vw, 3em)'}} variant='h4' component='h1'>ALEXANDER STOISOLOVICH</Typography>
      <Typography variant='body1'>FULLSTACK WEB APPLICATIONS</Typography>
    </div>
  );
};

export default Landing;
