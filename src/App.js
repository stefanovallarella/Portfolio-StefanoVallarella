import React from 'react';
import profile from './img/profile-pic.jpeg'; // Profile pic
import linkedin from './img/icons/github.svg'; // Github logo
import github from './img/icons/linkedin.svg'; // Linkedin logo
import java from './img/skills/java.svg'; // Java logo
import javascript from './img/skills/javascript.svg'; // Javascript logo
import nodejs from './img/skills/nodejs.svg'; // Nodejs logo
import express from './img/skills/express.svg'; // Express logo
import sequelize from './img/skills/sequelize.svg'; // Sequelize logo
import mysql from './img/skills/mysql.svg'; // Mysql logo
import html from './img/skills/html.svg'; // Html logo
import css from './img/skills/css.svg'; // Css logo
import reactjs from './img/skills/reactjs.svg'; // Reactjs logo
import bootstrap from './img/skills/bootstrap.svg'; // Bootstrap logo
import android from './img/skills/android.svg'; // Android logo
import git from './img/skills/git.svg'; // Git logo


function App() {
  return (
    <React.Fragment>
      
        {/* Full Background Intro */}
        <div className="full-view container-fluid">
          {/* Header */}
          <header className="container-fluid main-header">
            {/* Nav bar */}
            <div class="container-fluid">
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
                              <a class="nav-link" href="#"><img className="icons-redes-top" src={github} alt="Linkedin"/></a>
                          </li>
                      </ul>
                  </div>
              </nav>
            </div>
          </header>

          {/* Footer - Iconos enlaces */}

          <footer className="container-fluid main-footer">
            <div className="container icons-container">
              <div className="row align-items-end">
                  <div className="col-6 text-right">
                      <a href="#"> <img className="icons-redes" src={linkedin} alt="Linkedin"/> </a>
                  </div>
                  <div className="col-6  text-left">
                      <a href="#"> <img className="icons-redes" src={github} alt="Linkedin"/> </a>
                  </div>
              </div>
            </div>
          </footer>


          {/* Section 1 */}

     {/*      <div className="container-fluid">
            <div className="row profile-pic-container align-items-center">
                <div class="col-md-12 text-center">
                  <img className="profile-pic" src={profile} alt="pic profile"/>
                  <p className="pt-3 text-monospace font-weight-bold">Full Stack Developer</p>
                  <button type="button" class="btn btn-primary btn-sm">Ver más</button>
                </div>
            </div>
          </div>   
 */}
          {/* Section 1 Bis */}

{/*            <div className="container">
            <div className="row profile-pic-container align-items-center justify-content-center">
                <div class="col-md-4 text-center">
                  <img className="profile-pic" src={profile} alt="pic profile"/>
                </div>
                <div className="col-md-6">
                    <div className="about-me">
                    <h2>Título</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam in aliquam maiores. Pariatur quam fugiat consectetur non esse, temporibus quasi. Quaerat repellat qui ab nisi sint quis in debitis incidunt et culpa quae, commodi blanditiis a nemo beatae repudiandae nostrum saepe temporibus fugiat sapiente, distinctio labore odit explicabo officia. Animi.</p>
                    </div>
                </div>
            </div>
          </div>  
 */}

          {/* Section 2 */}
          
          <div className="container d-flex flex-column skills-container justify-content-center">
            <div className="row justify-content-around">
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={java} alt="Logo Java"/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={android} alt="Logo Android Studio"/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={javascript} alt="Logo Javascript"/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={nodejs} alt="Logo Nodejs"/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={express} alt="Logo Express"/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={sequelize} alt="Logo Sequelize"/>
                </div>
            </div>

            <div className="row justify-content-around skills-content">
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={mysql} alt="Logo Mysql"/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={html} alt="Logo Html5"/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={css} alt="Logo Css3"/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={reactjs} alt="Logo Reactjs"/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={bootstrap} alt="Logo Bootstrap"/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center skills-card">
                  <img className="skills-icons" src={git} alt="Logo Git"/>
                </div>
            </div>
          </div>


        </div>
    </React.Fragment>
  );
}

export default App;
