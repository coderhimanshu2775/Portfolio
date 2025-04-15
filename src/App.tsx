import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Welcome from './components/Welcome';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <Welcome onComplete={() => setShowContent(true)} />
      <div className={`bg-white transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;