import React from 'react';
import './app.scss';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Intro from './Components/intro/Intro';
import Projects from './Components/projects/Projects';
import Skills from './Components/skills/Skills';
import Topbar from './Components/topbar/Topbar';
import Work from './Components/work/Work';
import ThemeProvider, { useTheme } from './context/context';

function AppContent() {
  return (
    <div className="app">
      <div className="section">
        <Topbar />
        <Intro />
        <Projects />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
