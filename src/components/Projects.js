import React from 'react';

import github from '../img/icons/github.svg'; // Github logo



function Projects(){
    return(
        <React.Fragment>

          {/* Section 3 Projects */}

          <h1 className="card-title p-3 font-weight-bold text-center">Projects</h1>
          <div className="container-fluid d-flex align-items-center projects-container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-sm-10 col-md-10 col-lg-3 col-xl-3 card project grow-card">
                  <div className="card-body">
                    <div className="top-card">
                      <i class="far fa-folder-open"></i>
                      <a class="nav-link" href="#"><img className="icons-redes-top" src={github} alt="Github"/></a>
                    </div>
                    <h5 className="card-title">Proyecto 1</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content text to build on the card title and make up the bulk of the card's content.</p>
                    <span className="card-link">CSS</span>
                    <span className="card-link">HTML</span>
                    <span className="card-link">JS</span>
                    <span className="card-link">Nodejs</span>
                  </div>
                </div>

                <div className="col-12 col-sm-10 col-md-10 col-lg-3 col-xl-3 card project grow-card">
                  <div className="card-body">
                    <div className="top-card">
                      <i class="far fa-folder-open"></i>
                      <a class="nav-link" href="#"><img className="icons-redes-top" src={github} alt="Github"/></a>
                    </div>
                    <h5 className="card-title">Proyecto 2</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content text to build on the card title and make up the bulk of the card's content.</p>
                    <span className="card-link">CSS</span>
                    <span className="card-link">HTML</span>
                    <span className="card-link">JS</span>
                    <span className="card-link">Nodejs</span>
                  </div>
                </div>

                <div className="col-12 col-sm-10 col-md-10 col-lg-3 col-xl-3 card project grow-card">
                  <div className="card-body">
                    <div className="top-card">
                      <i class="far fa-folder-open"></i>
                      <a class="nav-link" href="#"><img className="icons-redes-top" src={github} alt="Github"/></a>
                    </div>
                    <h5 className="card-title">Proyecto 3</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content text to build on the card title and make up the bulk of the card's content.</p>
                    <span className="card-link">CSS</span>
                    <span className="card-link">HTML</span>
                    <span className="card-link">JS</span>
                    <span className="card-link">Nodejs</span>
                  </div>
                </div>
            </div>
          </div>
        </React.Fragment>  
    );
}




export default Projects;