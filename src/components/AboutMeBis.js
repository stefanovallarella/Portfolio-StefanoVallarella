import React, { Component } from 'react';

import profile from '../img/profile-pic.jpeg'; // Profile pic



class AboutMeBis extends Component{
  constructor(props){
    super(props);
    this.state={}
  }


render(){
      return(
        <React.Fragment>
          {/* Section 1 About me Bis */}
          <div id="home" className="container d-flex flex-column justify-content-center align-items-center profile-pic-container-bis">
          <h1 className="text-center section-title animate__animated animate__fadeInDown white-color-title about-title">About me</h1> 
            <div className="row align-items-center justify-content-center about-img-container">
                <div class="col-md-4 text-center animate__animated animate__fadeInLeft">
                  <img className="profile-pic" src={profile} alt="pic profile"/>
                  {this.props.onMobile ? <h3 className="card-title white-color name-about">Stefano Vallarella</h3> : null }
                </div>
                <div className="col-md-6 animate__animated animate__fadeInUp">
                    {this.props.onMobile ? null : <h3 className="card-title white-color name-about">¡Hola! Soy <strong>Stefano Vallarella</strong></h3>}
                    <div className="about-me">
                    <h5 className="card-title fullstack">Full Stack Developer </h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="white-color">Tengo 26 años y soy un apasionado por la tecnología desde siempre. Comencé en el mundo de la programación de modo autodidacta aprendiendo Android (Java) y luego me encontré con la oportunidad de concursar por una beca de Programación Web Full Stack en una coding school con prestigio como lo es Digital House. Entre más de 100 participantes pude destacarme y ganar una de las 23 becas sorteadas.</p>
                    </div>
                </div>
            </div>
          </div>  
        </React.Fragment>  
      );
    }
}




export default AboutMeBis;