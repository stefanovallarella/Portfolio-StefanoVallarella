import React, { Component } from 'react';


/* Logos Skills */
import java from '../img/skills/java.svg'; // Java logo
import javascript from '../img/skills/javascript.svg'; // Javascript logo

import nodejs from '../img/skills/nodejs.svg'; // Nodejs logo
import nodejswhite from '../img/skills/nodejswhite.svg'; // Nodejs Blanco logo

import express from '../img/skills/express.svg'; // Express logo
import expresswhite from '../img/skills/expresswhite.svg'; // Express Blanco logo

import sequelize from '../img/skills/sequelize.svg'; // Sequelize logo
import mysql from '../img/skills/mysql.svg'; // Mysql logo

import html from '../img/skills/html.svg'; // Html logo
import htmlwhite from '../img/skills/htmlwhite.svg'; // Html logo

import css from '../img/skills/css.svg'; // Css logo
import csswhite from '../img/skills/csswhite.svg'; // Css logo

import reactjs from '../img/skills/reactjs.svg'; // Reactjs logo
import bootstrap from '../img/skills/bootstrap.svg'; // Bootstrap logo

import android from '../img/skills/android.svg'; // Android logo
import androidwhite from '../img/skills/androidwhite.svg'; // Android Blanco logo

import git from '../img/skills/git.svg'; // Git logo
import gitwhite from '../img/skills/gitwhite.svg'; // Git logo




class Skills extends Component{
  constructor(props){
    super(props);
    this.state={}
}


render(){
  return(
    <React.Fragment>

      {/* Section 2 Skills*/}
      
      <div id="skills" className="container d-flex flex-column skills-container justify-content-center">
        <h1 className="text-center animate__animated animate__fadeInDown white-color-title black-color-title">Skills</h1>
          <div className="row justify-content-around skills-content animate__animated animate__zoomIn">
              <div className="col-6 col-sm-4 col-md-4 col-md-4 col-lg-2  d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale"> 
                  <img className="skills-icons" src={java} alt="Java"/>      
                </div> 
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale">
                  <img className="skills-icons" src={this.props.onMobile ? android : androidwhite} alt="Android Studio"/>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale">
                  <img className="skills-icons" src={javascript} alt="Javascript"/>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale">
                  <img className="skills-icons" src={this.props.onMobile ? nodejs : nodejswhite} alt="Nodejs"/>                
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale">
                  <img className="skills-icons" src={this.props.onMobile ? express : expresswhite} alt="Express"/>               
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale">
                  <img className="skills-icons" src={sequelize} alt="Sequelize"/>                
                </div>
              </div>
          </div>

          <div className="row justify-content-around skills-content animate__animated animate__zoomIn">
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale">
                  <img className="skills-icons" src={mysql} alt="Mysql"/>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale">
                  <img className="skills-icons" src={this.props.onMobile ? html : htmlwhite} alt="Html5"/>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale">
                  <img className="skills-icons" src={this.props.onMobile ? css : csswhite} alt="CSS3"/> 
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale">
                  <img className="skills-icons" src={reactjs} alt="Reactjs"/>                
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale">
                  <img className="skills-icons" src={bootstrap} alt="Bootstrap"/>                 
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 d-flex flex-column align-items-center justify-content-center skills-card">
                <div className="d-flex align-items-center justify-content-center skills-icons-content grayscale">
                  <img className="skills-icons" src={this.props.onMobile ? git : gitwhite} alt="Git"/>           
                </div>
              </div>
          </div>
      </div>



    </React.Fragment>  
  )

}

}






export default Skills;