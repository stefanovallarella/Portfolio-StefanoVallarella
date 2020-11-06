import React from 'react';


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
                  <a class="navbar-brand" href="#">Stefano Vallarella</a>
                  <div class="collapse navbar-collapse ">
                      <ul class="navbar-nav ml-auto">
                          <li class="nav-item">
                              <a class="nav-link" href="#">About me</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Skills</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Projects</a>
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
        </React.Fragment>  
    );
}




export default Header;