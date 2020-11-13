import React from 'react';


function MenuMobile(){
    return(
        <React.Fragment>
            {/* Menu mobile */}
            <nav className="nav nav-mobile d-lg-none d-xl-none">
                <a id="nav-mobile-home" href="#home" className="nav__link">
                    <i className="fas fa-house-user nav__icon"></i>
                </a>
                <a id="nav-mobile-skills" href="#skills" className="nav__link">
                    <i className="fas fa-code nav__icon"></i>
                </a>
                <a id="nav-mobile-projects" href="#projects" className="nav__link">
                    <i className="far fa-folder-open nav__icon"></i>
                </a>
                <a id="nav-mobile-redes" href="#redes" className="nav__link">
                    <i className="fas fa-share-alt nav__icon"></i>
                </a>
            </nav>
        </React.Fragment>  
    );
}




export default MenuMobile;