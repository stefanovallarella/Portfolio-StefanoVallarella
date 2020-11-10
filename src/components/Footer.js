import React from 'react';

import linkedin from '../img/icons/linkedin.svg'; // Linkedin logo
import github from '../img/icons/github.svg'; // Github logo
import cv from '../img/icons/cv.svg'; // Cv logo

function Footer(){
    return(
        <React.Fragment>

        {/* Footer - Iconos enlaces */}

         <footer id="redes" className="container-fluid main-footer">
            <div className="container icons-container">
              <div className="row align-items-center justify-content-center">
                  <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-center">
                      <a href="#"> <img className="icons-redes" src={linkedin} alt="Linkedin"/> </a>
                  </div>
                  <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-center">
                      <a href="#"> <img className="icons-redes" src={github} alt="Github"/> </a>
                  </div>
                  <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-center">
                      <a href="#"> <img className="icons-redes" src={cv} alt="Cv"/> </a>
                  </div>
              </div>
            </div>
          </footer> 

        </React.Fragment>  
    );
}




export default Footer;