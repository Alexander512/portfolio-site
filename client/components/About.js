import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const About = () => {
  return (
    <div id='containerAbout'>
      <Navigation />
      <h1>ABOUT ME</h1>
      <img src='images/profile_picture.jpg' alt='A picture of me' />
      <p id='p1'>
        I've always been passionate about building things. I majored in engineering
        and was an engineer in the automotive and aerospace industries where
        I focused on new products and processes. This work heavily involved the 
        use of statistics and statistical programming which is how I originally 
        became interested in software development.
      </p>
      <p id='p2'>
        After learning how to write code it quickly became a new interest both personally 
        and professionally. I absolutely enjoy the problem solving and engineering aspects
        of developing software and understand the benefits high quality software can bring
        to a business.
      </p>
      <Footer />
    </div>
  );
};

export default About;
