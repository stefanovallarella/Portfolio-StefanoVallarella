import React from 'react';
import MenuMobile from './components/MenuMobile';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import AboutMeBis from './components/AboutMeBis';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';



function App() {
  return (
    <React.Fragment>

        <MenuMobile />

        {/* Full Background Intro */}
        <div className="full-view container-fluid">
          
            <Header />

            <Footer />
    
        </div>
    </React.Fragment>
  );
}

export default App;
