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
                  A portfolio site built with React. All components are
                  functional components with hooks for state management.
                  The site is deployed via Heroku.
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
                  A JavaScript library for performing descriptive statistics with
                  optional handling of missing values. The functions are written in 
                  JavaScript, unit testing is done with Mocha and Chai via GitHub Actions, 
                  and the documentation is written in HTML and CSS with the site
                  hosted on GitHub pages. 
                </p>
                <a href='https://github.com/Alexander512/the-missing-value'>CODE ON GITHUB</a><br />
                <a href='https://alexander512.github.io/the-missing-value/'>DOCUMENTATION SITE</a><br />
                <a href='https://www.npmjs.com/package/the-missing-value'>NPM</a>
              </div>
          </ul>

      <Footer />

    </div>
  );
};

export default Projects;
