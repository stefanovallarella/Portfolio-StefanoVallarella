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
          
          <div id="skills" className="container d-flex flex-column skills-container justify-content-center">
            <h1 className="font-weight-bold text-center animate__animated animate__fadeInDown">Skills</h1>
              <div className="row justify-content-around skills-content animate__animated animate__zoomIn">
                  <div className="col-6 col-sm-4 col-md-4 col-md-4 col-lg-2  d-flex flex-column align-items-center justify-content-center skills-card">
                    {/* <div className="row align-items-center justify-content-center skills-icons-content"> */}
                      <img className="skills-icons" src={java} alt="Java"/>
                      
                    {/* </div> */}
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                    {/* <div className="row align-items-center justify-content-center skills-icons-content"> */}
                      <img className="skills-icons" src={android} alt="Android Studio"/>
                      {/* <button className="btn btn-light">Android Studio</button> */}
                    {/* </div> */}
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                    <div className="row align-items-center justify-content-center">
                      <img className="skills-icons" src={javascript} alt="Javascript"/>
                      
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                    <div className="row align-items-center justify-content-center">
                      <img className="skills-icons" src={nodejs} alt="Nodejs"/>
                      
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                    <div className="row align-items-center justify-content-center">
                      <img className="skills-icons" src={express} alt="Express"/>
                      
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                    <div className="row align-items-center justify-content-center">
                      <img className="skills-icons" src={sequelize} alt="Sequelize"/>
                      
                    </div>
                  </div>
              </div>

              <div className="row justify-content-around skills-content animate__animated animate__zoomIn">
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                    <div className="row align-items-center justify-content-center">
                      <img className="skills-icons" src={mysql} alt="Mysql"/>
                      
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                    <div className="row align-items-center justify-content-center">
                      <img className="skills-icons" src={html} alt="Html5"/>
                      
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                    <div className="row align-items-center justify-content-center">
                      <img className="skills-icons" src={css} alt="CSS3"/>
                      
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                    <div className="row align-items-center justify-content-center">
                      <img className="skills-icons" src={reactjs} alt="Reactjs"/>
                      
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                    <div className="row align-items-center justify-content-center">
                      <img className="skills-icons" src={bootstrap} alt="Bootstrap"/>
                      
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                    <div className="row align-items-center justify-content-center">
                      <img className="skills-icons" src={git} alt="Git"/>
                      
                    </div>
                  </div>
              </div>
          </div>



        </React.Fragment>  
    );
}




export default Skills;