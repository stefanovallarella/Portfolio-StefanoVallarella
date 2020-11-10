import React from 'react';
import java from '../img/skills/java.svg'; // Java logo
import javascript from '../img/skills/javascript.svg'; // Javascript logo
import nodejs from '../img/skills/nodejs.svg'; // Nodejs logo
import express from '../img/skills/express.svg'; // Express logo
import sequelize from '../img/skills/sequelize.svg'; // Sequelize logo
import mysql from '../img/skills/mysql.svg'; // Mysql logo
import html from '../img/skills/html.svg'; // Html logo
import css from '../img/skills/css.svg'; // Css logo
import reactjs from '../img/skills/reactjs.svg'; // Reactjs logo
import bootstrap from '../img/skills/bootstrap.svg'; // Bootstrap logo
import android from '../img/skills/android.svg'; // Android logo
import git from '../img/skills/git.svg'; // Git logo



function Skills(){
    return(
        <React.Fragment>

          {/* Section 2 Skills*/}
          
          <div className="container d-flex flex-column skills-container justify-content-center">
            <h1 className="font-weight-bold text-center animate__animated animate__fadeInDown">Skills</h1>
              <div className="row justify-content-around skills-content">
                  <div className="col-6 col-sm-4 col-md-4 col-md-4 col-lg-2  d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={java} alt="Logo Java"/>
                      <button className="btn btn-light">Java</button>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={android} alt="Logo Android Studio"/>
                      <button className="btn btn-light">Android Studio</button>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={javascript} alt="Logo Javascript"/>
                      <button className="btn btn-light">Javascript</button>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={nodejs} alt="Logo Nodejs"/>
                      <button className="btn btn-light">Nodejs</button>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={express} alt="Logo Express"/>
                      <button className="btn btn-light">Express</button>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={sequelize} alt="Logo Sequelize"/>
                      <button className="btn btn-light">Sequelize</button>
                    </div>
                  </div>
              </div>

              <div className="row justify-content-around skills-content">
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={mysql} alt="Logo Mysql"/>
                      <button className="btn btn-light">Mysql</button>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={html} alt="Logo Html5"/>
                      <button className="btn btn-light">HTML5</button>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={css} alt="Logo CSS3"/>
                      <button className="btn btn-light">CSS3</button>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={reactjs} alt="Logo Reactjs"/>
                      <button className="btn btn-light">Reactjs</button>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={bootstrap} alt="Logo Bootstrap"/>
                      <button className="btn btn-light">Bootstrap</button>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-end skills-card">
                    <div className="row d-flex flex-column align-items-center">
                      <img className="skills-icons" src={git} alt="Logo Git"/>
                      <button className="btn btn-light">Git</button>
                    </div>
                  </div>
              </div>
          </div>



        </React.Fragment>  
    );
}




export default Skills;