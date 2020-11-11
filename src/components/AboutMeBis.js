import React from 'react';

import profile from '../img/profile-pic.jpeg'; // Profile pic


function AboutMeBis(){
    return(
        <React.Fragment>
          {/* Section 1 About me Bis */}
          <div id="home" className="container d-flex flex-column justify-content-center align-items-center profile-pic-container-bis">
          <h1 className="font-weight-bold text-center section-title animate__animated animate__fadeInDown white-color">About me</h1> 
            <div className="row align-items-center justify-content-center mb-3">
                <div class="col-md-4 text-center animate__animated animate__fadeInLeft">
                  <img className="profile-pic" src={profile} alt="pic profile"/>
                </div>
                <div className="col-md-6 animate__animated animate__fadeInUp">
                    <div className="about-me">
                    <h3 className="card-title pt-3 font-weight-bold white-color">Stefano Vallarella</h3>
                    <h5 className="card-title font-weight-light white-color">Full Stack Developer </h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                     <p className="white-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam in aliquam maiores. Pariatur quam fugiat consectetur non esse, temporibus quasi. Quaerat repellat qui ab nisi sint quis in debitis incidunt et culpa quae, commodi blanditiis a nemo beatae repudiandae nostrum saepe temporibus fugiat sapiente, distinctio labore odit explicabo officia. Animi.</p>
                    </div>
                </div>
            </div>
          </div>  
        </React.Fragment>  
    );
}




export default AboutMeBis;