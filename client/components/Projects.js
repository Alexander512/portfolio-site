import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Projects = () => {
  return (
    <div id='containerProjects'>
      <Navigation />

        <h1>PROJECTS</h1>

          <ul>
            <li><strong>PORTFOLIO SITE</strong></li>
              <div className='project'>
                <p>
                  A portfolio site built with React focusing on 
                  using functional components with hooks and responsive
                  styling using CSS grid.
                </p>
                <a href='https://github.com/Alexander512/portfolio-site'>CODE ON GITHUB</a>
              </div>
            <li><strong>HEALTH TRACKER APP</strong></li>
              <div className='project'>
                <p>
                  An analytics application for tracking health related data
                  such as heart rate, step count, and distance walked. The 
                  application was built with React and utilized both functional
                  and legacy class components. Additionally, a Redux store was
                  used for state management.
                </p>
                <a href='https://github.com/Alexander512/health_tracker'>CODE ON GITHUB</a>
              </div>
            <li><strong>THE MISSING VALUE</strong></li>
              <div className='project'>
                <p>
                  A JavaScript library for performing statistics. The focus of 
                  this project is on fundamentals with the functions written in JavaScript, 
                  unit testing with Mocha and Chai utilizing GitHub Actions, and
                  documentation written in plain HTML and CSS with the site
                  hosted on GitHub pages. 
                </p>
                <a href='https://github.com/Alexander512/the-missing-value'>CODE ON GITHUB</a><br />
                <a href='https://alexander512.github.io/the-missing-value/'>DOCUMENTATION SITE</a>
              </div>
          </ul>

      <Footer />

    </div>
  );
};

export default Projects;
