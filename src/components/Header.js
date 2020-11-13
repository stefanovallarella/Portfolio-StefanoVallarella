import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

// Componentes
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';

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
            <div className="container-fluid nav-desktop">
              <nav className="navbar navbar-expand-md p-4 mr-4 ml-4">
                  <NavLink className="navbar-brand nav-item-desktop desktop-brand-style" exact to="/">Stefano Vallarella</NavLink>
                  <div className="collapse navbar-collapse ">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <NavLink className="nav-link nav-item-desktop desktop-menu-style" exact to="/" activeClassName="menu-active">About me</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link nav-item-desktop desktop-menu-style" to="/skills" activeClassName="menu-active">Skills</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link nav-item-desktop desktop-menu-style" to="/projects" activeClassName="menu-active">Projects</NavLink>
                          </li>
                          <li className="nav-item">
                              <a target="_blank" rel="noreferrer" className="nav-link" href="https://www.linkedin.com/in/stefanovallarella"><img className="icons-redes-top" src={linkedin} alt="Linkedin"/></a>
                          </li>
                          <li className="nav-item">
                              <a target="_blank" rel="noreferrer" className="nav-link" href="https://github.com/stefanovallarella"><img className="icons-redes-top" src={github} alt="Github"/></a>
                          </li>
                          <li className="nav-item">
                              <a target="_blank" rel="noreferrer" className="nav-link" href="#"><img className="icons-redes-top" src={cv} alt="CV"/></a>
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