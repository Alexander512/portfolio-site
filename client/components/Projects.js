import React from 'react';
import Footer from './Footer';

const Projects = () => {
  return (
    <>
      <main id='containerMain'>

        <h1>Projects</h1>

        <div id='flexContainerProjects'>

          <div className='card'>
            <h2>Portfolio Site</h2>
            <img src='' alt='An image of the portfolio site' />
            <h3>Description</h3>
            <p>
              A portfolio site built with React focusing on 
              using functional components with hooks and responsive
              styling.
            </p>
          </div>

          <div className='card'>
            <h2>Health Tracker App</h2>
            <img src='' alt='An image of the health tracker app' />
            <h3>Description</h3>
            <p>
              An analytics application for tracking health related data
              such as heart rate, step count, and distance walked. The 
              application was built with React and utilized both functional
              and legacy class components. Additionally, a Redux store was
              used for state management.
            </p>
          </div>

          <div className='card'>
            <h2>The Missing Value</h2>
            <img src='' alt='An image of the missing value site' />
            <h3>Description</h3>
            <p>
              A JavaScript library for performing statistics. The focus of 
              this project is on fundamentals with the functions written in JavaScript, 
              unit testing with Mocha and Chai utilizing GitHub Actions, and
              documentation written in plain HTML and CSS with the site
              hosted on GitHub pages. 
            </p>
          </div>

        </div>

      </main>
      
      <Footer />

    </>
  );
};

export default Projects;
