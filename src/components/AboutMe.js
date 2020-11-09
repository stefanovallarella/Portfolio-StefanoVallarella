import React from 'react';

import profile from '../img/profile-pic.jpeg'; // Profile pic

import AboutMeBis from './AboutMeBis';

function AboutMe(){
    return(
        <React.Fragment>
        {/* Section 1 About me */}
          {/* Full Background Intro */}
          
        <div className="full-view container-fluid">

          <AboutMeBis />

           {/*  <div className="container-fluid">
              <div className="row profile-pic-container align-items-center">
                  <div class="col-md-12 text-center">
                    <img className="profile-pic" src={profile} alt="pic profile"/>
                    <h5 className="card-title p-1 font-weight-bold">Full Stack Developer </h5>
                    
                    <button type="button" class="btn btn-primary btn-sm">Ver más</button>
                  </div>
              </div>
            </div> */}
          </div>

      
        </React.Fragment>  
    );
}




export default AboutMe;