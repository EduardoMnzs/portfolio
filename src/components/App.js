import React from 'react';
import '../styles/App.css';

import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Technologies from './Technologies';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
