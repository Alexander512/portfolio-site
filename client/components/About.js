import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <main id='containerAbout'>
        <h1>About Me</h1>
        <div id='flexContainerAbout'>
          <img className='profile' src='images/profile_picture.jpg' alt='A picture of me' />
          <div>
            <p className='about'>
              I've always been passionate about building things. I majored in engineering
              and was a successful engineer in the automotive and aerospace industries where
              I worked as an Industrialization Engineer focused on new products and processes.
              This work heavily involved the use of statistics and statistical programming which
              is how I originally became interested in software development.
            </p>
            <p className='about'>
              After learning how to write code it quickly became a new interest both personally 
              and professionally. I absolutely enjoy the problem solving and engineering aspects
              of developing software and understand the benefits high quality software can bring
              to a business.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
