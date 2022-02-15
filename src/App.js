import React from 'react';
import {Navigation, MainBody, AboutMe, Projects, Skill, Footer} from './components';
import { HardHability, SoftHability, NavItems, SocialNetwork } from './components/home/configfiles/config';
import "./assets/css/styles.css"
function App() {
  return (
    <>
      <Navigation NavItems={NavItems}/>
      <MainBody SocialNetwork={SocialNetwork} />
      <AboutMe />
      <Projects />
      <Skill HardHability={HardHability} SoftHability={SoftHability} />
      <Footer />
    </>
  );
}

export default App;
