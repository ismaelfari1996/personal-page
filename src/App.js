import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import MainBody from './components/home/Jumbotrom';
import AboutMe from './components/home/aboutme';
import Projects from './components/home/briefcase';
import Skill from './components/home/skill';
function App() {
  return (
    <>
      <Navigation />
      <MainBody />
      <AboutMe />
      <Projects />
      <Skill />
    </>
  );
}

export default App;
