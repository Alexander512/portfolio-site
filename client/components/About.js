import React from 'react';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <div id='containerAdjustable'>
      <Typography variant='h4' component='h1'>ABOUT ME</Typography>
      <Avatar id='avatar' alt='picture of me' src='/images/profile_picture.jpg' variant='square' />
      <Typography id='pAbout' variant='body1'>
        I've always been passionate about building things. I majored in engineering
        and was an engineer in the automotive and aerospace industries where
        I focused on new products and processes. This work heavily involved the 
        use of statistics and statistical programming which is how I originally 
        became interested in software development. After learning how to write code 
        it quickly became a new interest both personally and professionally. I 
        absolutely enjoy the problem solving and engineering aspects of developing 
        software and understand the benefits high quality software can bring
        to a business.
      </Typography>
    </div>
  );
};

export default About;
