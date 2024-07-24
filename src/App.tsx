import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Macbook from './components/macbook';
import About from './components/about';
import Contact from './components/contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <NavbarHero /> */}
      <Projects />
      <Macbook />
      <About />
      <Contact />
    </div>
  );
}

export default App;