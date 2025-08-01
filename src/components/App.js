import React from 'react';
import '../styles/App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Technologies from './Technologies';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import AllProjects from '../pages/AllProjects';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
              <Technologies />
              <About />
              <Contact />
            </>
          } />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
