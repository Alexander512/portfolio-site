import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <div id='container'>
      <Navigation />
      <Typography variant='h3' component='h1'>PROJECTS</Typography>
        <div id='flexContainer'>
          <Card id='card1' className='card' sx={{backgroundColor: '#000000', color: '#C0C0C0'}}>
            <Typography variant='h4' component='h2'>PORTFOLIO SITE</Typography>
              <Typography variant='body1'>
                A portfolio site built with React. All components are
                functional components with hooks for state management and
                client-side routing is performed with React-Router. Material UI 
                components are utilized for styling in conjunction with 
                CSS grid. The site is deployed via Heroku.
              </Typography>
              <Link sx={{color: '#4D73FF', textDecoration: 'none'}} href='https://github.com/Alexander512/portfolio-site'>
                GITHUB
              </Link>
          </Card>
          <Card id='card2' className='card' sx={{backgroundColor: '#000000', color: '#C0C0C0'}}>
            <Typography variant='h4' component='h2'>HEALTH TRACKER</Typography>
              <Typography variant='body1'>
                An analytics application for tracking health related data
                such as heart rate, step count, and distance walked. The 
                application was built with React and utilized both functional
                and legacy class components. Additionally, a Redux store was
                used for state management.
              </Typography>
              <Link sx={{color: '#4D73FF', textDecoration: 'none'}} href='https://github.com/Alexander512/health_tracker'>
                GITHUB
              </Link>
          </Card>
          <Card id='card3' className='card' sx={{backgroundColor: '#000000', color: '#C0C0C0'}}>
            <Typography variant='h4' component='h2'>THE MISSING VALUE</Typography>
              <Typography variant='body1'>
                A JavaScript library for performing descriptive statistics with
                optional removal of missing values. The functions are written in 
                JavaScript, unit testing is done with Mocha and Chai, and the 
                documentation is written in HTML and CSS. 
              </Typography>
              <Link sx={{color: '#4D73FF', textDecoration: 'none'}} href='https://github.com/Alexander512/the-missing-value'>
                GITHUB
              </Link><br />
              <Link sx={{color: '#4D73FF', textDecoration: 'none'}} href='https://alexander512.github.io/the-missing-value/'>
                DOCUMENTATION
              </Link><br />
              <Link sx={{color: '#4D73FF', textDecoration: 'none'}} href='https://www.npmjs.com/package/the-missing-value'>
                NPM
              </Link>
          </Card>
        </div>
      <Footer />
    </div>
  );
};

export default Projects;
