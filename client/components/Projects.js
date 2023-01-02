import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from'@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <section className='containerAdjustable'>
      <Typography variant='h4' component='h1'>PROJECTS</Typography>
      <Link sx={{color: '#4D73FF', margin: '3vh 0 3vh 0', textDecoration: 'none'}} href='https://github.com/Alexander512'>
        CODE AVAILABLE ON GITHUB 
      </Link>
        <div id='flexContainer'>
          <Card className='card' sx={{backgroundColor: '#000000', color: '#C0C0C0'}}>
            <CardHeader title='PORTFOLIO SITE' />
            <CardContent>
              <Typography variant='body1'>
                A portfolio site built with React. All components are
                functional components with hooks for state management.
                Material UI components are utilized for styling. The 
                site is deployed via Heroku.
              </Typography>
            </CardContent>
          </Card>
          <Card className='card' sx={{backgroundColor: '#000000', color: '#C0C0C0'}}>
            <CardHeader title='HEALTH TRACKER' />
            <CardContent>
              <Typography variant='body1'>
                An analytics application for tracking health related data. The 
                application was built with React and utilized both functional
                and class components. A Redux store was used for state management.
              </Typography>
            </CardContent>
          </Card>
          <Card className='card' sx={{backgroundColor: '#000000', color: '#C0C0C0'}}>
            <CardHeader title='THE MISSING VALUE' />
            <CardContent>
              <Typography variant='body1'>
                A JavaScript library for performing descriptive statistics with
                optional removal of missing values. The functions are written in 
                JavaScript, and unit testing is performed with Mocha and Chai.
              </Typography>
            </CardContent>
          </Card>
        </div>
    </section>
  );
};

export default Projects;
