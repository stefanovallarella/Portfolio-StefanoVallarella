import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

// Componentes
import MenuMobile from './MenuMobile';
import AboutMe from './AboutMe';
import AboutMeBis from './AboutMeBis';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

// Iconos
import linkedin from '../img/icons/linkedin.svg'; // Linkedin logo
import github from '../img/icons/github.svg'; // Github logo
import cv from '../img/icons/cv.svg'; // Cv logo

function Header(){
    return(
        <React.Fragment>
        {/* Header */}
          <header className="container-fluid main-header">
            {/* Nav bar */}
            <div class="container-fluid nav-desktop">
              <nav class="navbar navbar-expand-md p-4 mr-4 ml-4">
                  <NavLink className="navbar-brand nav-item-desktop" exact to="/">Stefano Vallarella</NavLink>
                  <div class="collapse navbar-collapse ">
                      <ul class="navbar-nav ml-auto">
                          <li class="nav-item">
                              <NavLink className="nav-link nav-item-desktop" exact to="/">About me</NavLink>
                          </li>
                          <li class="nav-item">
                              <NavLink className="nav-link nav-item-desktop" to="/skills">Skills</NavLink>
                          </li>
                          <li class="nav-item">
                              <NavLink className="nav-link nav-item-desktop" to="/projects">Projects</NavLink>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#"><img className="icons-redes-top" src={linkedin} alt="Linkedin"/></a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#"><img className="icons-redes-top" src={github} alt="Github"/></a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#"><img className="icons-redes-top" src={cv} alt="CV"/></a>
                          </li>
                      </ul>
                  </div>
              </nav>
            </div>
          </header>


            <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
            >
                <Route exact path="/" component={ AboutMe } />   
                <Route path="/skills" component={ Skills } />   
                <Route path="/projects" component={ Projects } />
            </AnimatedSwitch>

        </React.Fragment>  
    );
}




export default Header;