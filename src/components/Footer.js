import React, {Component} from 'react';

import linkedin from '../img/icons/linkedin.svg'; // Linkedin logo
import github from '../img/icons/github.svg'; // Github logo
import cv from '../img/icons/cv.svg'; // Cv logo

import linkedinblack from '../img/icons/linkedinblack.svg'; // Linkedin black logo
import githubblack from '../img/icons/githubblack.svg'; // Github black logo
import cvblack from '../img/icons/cvblack.svg'; // Cv black logo

class Footer extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <React.Fragment>
            {/* Footer - Iconos enlaces */}
             <footer id="redes" className="container-fluid main-footer">
                <div className="container icons-container">
                  <div className="row align-items-center justify-content-center">
                      <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-center">
                          <a target="_blank" href="https://www.linkedin.com/in/stefanovallarella"> <img className="icons-redes" src={this.props.onMobile ? linkedinblack : linkedin} alt="Linkedin"/> </a>
                      </div>
                      <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-center">
                          <a target="_blank" href="https://github.com/stefanovallarella"> <img className="icons-redes" src={this.props.onMobile ? githubblack : github} alt="Github"/> </a>
                      </div>
                      <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-center">
                          <a target="_blank" href="#"> <img className="icons-redes" src={this.props.onMobile ? cvblack : cv} alt="Cv"/> </a>
                      </div>
                  </div>
                </div>
              </footer> 
            </React.Fragment>  
        );


    }



}





export default Footer;