import React from 'react';
import profile from './img/profile-pic.jpeg'; // Profile pic


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
                      </ul>
                  </div>
              </nav>
            </div>
          </header>

          {/* Section 1 */}

    {/*       <div className="container-fluid">
            <div className="row profile-pic-container align-items-center">
                <div class="col-md-12 text-center">
                  <img className="profile-pic" src={profile} alt="pic profile"/>
                  <p className="pt-3 text-monospace font-weight-bold">Full Stack Developer</p>
                  <button type="button" class="btn btn-primary btn-sm">Ver más</button>
                </div>
            </div>
          </div>   */}

          {/* Section 1 Bis */}

          <div className="container">
            <div className="row profile-pic-container align-items-center justify-content-center">
                <div className="col-md-6">
                    <div className="about-me">
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam in aliquam maiores. Pariatur quam fugiat consectetur non esse, temporibus quasi. Quaerat repellat qui ab nisi sint quis in debitis incidunt et culpa quae, commodi blanditiis a nemo beatae repudiandae nostrum saepe temporibus fugiat sapiente, distinctio labore odit explicabo officia. Animi.</p>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                  <img className="profile-pic" src={profile} alt="pic profile"/>
                </div>
            </div>
          </div> 
          









      </div>
    </React.Fragment>
  );
}

export default App;
