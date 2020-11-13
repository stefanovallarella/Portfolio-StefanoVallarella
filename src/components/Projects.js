import React from 'react';

import github from '../img/icons/githubblack.svg'; // Github logo



function Projects(){
    return(
        <React.Fragment>

          {/* Section 3 Projects */}

          <div id="projects" className="container-fluid d-flex flex-column align-items-center justify-content-center projects-container">
            <h1 className="text-center section-title animate__animated animate__fadeInDown white-color-title black-color-title projects-title">Projects</h1>
            <div className="row align-items-center justify-content-center projects-all-container">
                <div className="col-12 col-sm-10 col-md-10 col-lg-3 col-xl-3 card project grow-card animate__animated animate__fadeInLeft">
                  <div className="card-body project-body">
                    <div className="top-card">
                      <i className="far fa-folder-open"></i>
                      <a target="_blank" rel="noreferrer" className="nav-link" href="https://github.com/mar156/grupo_6_ThunderShoes"><img className="icons-redes-top" src={github} alt="Github"/></a>
                    </div>
                    <h5 className="card-title">E-commerce - Thunder Shoes</h5>
                    <p className="card-text">Proyecto Integrador del curso de programación Web Full Stack de Digital House. Consiste en un E-commerce desarrollado en Nodejs utilizando metodologías ágiles (SCRUM).</p>
                    <span className="tech-project">Nodejs</span>
                    <span className="tech-project">Express</span>
                    <span className="tech-project">HTML</span>
                    <span className="tech-project">CSS</span>
                    <span className="tech-project">Reactjs</span>
                    <span className="tech-project">MySQL</span>
                    <span className="tech-project">Sequelize</span>                 
                  </div>
                </div>

                <div className="col-12 col-sm-10 col-md-10 col-lg-3 col-xl-3 card project grow-card animate__animated animate__fadeInUp">
                  <div className="card-body project-body">
                    <div className="top-card">
                      <i className="far fa-folder-open"></i>
                      <a target="_blank" rel="noreferrer" className="nav-link" href="https://github.com/stefanovallarella/GraficaComini"><img className="icons-redes-top" src={github} alt="Github"/></a>
                    </div>
                    <h5 className="card-title">Gráfica Comini</h5>
                    <p className="card-text">Proyecto realizado para la imprenta Gráfica Comini ubicada en Rosario, Argentina. Desarrollado en Nodejs con el uso de Express para el Backend y CSS3/HTML5 para el Frontend.</p>
                    <span className="tech-project">Nodejs</span>
                    <span className="tech-project">Express</span>
                    <span className="tech-project">HTML</span>
                    <span className="tech-project">CSS</span>
                  </div>
                </div>

                <div className="col-12 col-sm-10 col-md-10 col-lg-3 col-xl-3 card project grow-card animate__animated animate__fadeInBottomRight">
                  <div className="card-body project-body">
                    <div className="top-card">
                      <i className="far fa-folder-open"></i>
                      <a target="_blank" rel="noreferrer" className="nav-link" href="https://github.com/stefanovallarella/Portfolio-StefanoVallarella"><img className="icons-redes-top" src={github} alt="Github"/></a>
                    </div>
                    <h5 className="card-title">Portfolio Stefano Vallarella</h5>
                    <p className="card-text">Portfolio personal realizado en su totalidad en Reactjs utilizando HTML5, CSS3 y Bootstrap. Consiste en una SPA(Single Page Application) en Desktop y scrolleable en Mobile.</p>
                    <span className="tech-project">Nodejs</span>
                    <span className="tech-project">Reactjs</span>
                    <span className="tech-project">HTML</span>
                    <span className="tech-project">CSS</span>
                    <span className="tech-project">Bootstrap</span>
                  </div>
                </div>
            </div>
          </div>
        </React.Fragment>  
    );
}




export default Projects;