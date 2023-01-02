import React from 'react';

import Typography from '@mui/material/Typography';

const Landing = () => {
  return (
    <section id='container'>
      <Typography sx={{fontSize: 'clamp(1em, 0.85em + 3vw, 3em)'}} variant='h4' component='h1'>ALEXANDER STOISOLOVICH</Typography>
      <Typography variant='body1'>FULLSTACK ENGINEER</Typography>
    </section>
  );
};

export default Landing;
