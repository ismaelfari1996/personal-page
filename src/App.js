import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import MainBody from './components/home/Jumbotrom';
import AboutMe from './components/home/aboutme';
import Projects from './components/home/briefcase';
import Skill from './components/home/skill';
import Footer from './components/footer';
import "./assets/css/styles.css"
function App() {
  return (
    <>
      <Navigation />
      <MainBody />
      <AboutMe />
      <Projects />
      <Skill />
      <Footer />
    </>
  );
}

export default App;
