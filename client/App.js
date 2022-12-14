import React from 'react';

import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <main>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
