import React from 'react';


function MenuMobile(){
    return(
        <React.Fragment>
            {/* Menu mobile */}
            <nav class="nav nav-mobile d-lg-none d-xl-none">
                <a href="#" class="nav__link">
                    <i class="fas fa-house-user nav__icon"></i>
                    {/* <span class="nav__text">About</span> */}
                </a>
                <a href="#" class="nav__link nav__link--active">
                    <i class="fas fa-code nav__icon"></i>
                    {/* <span class="nav__text">Skills</span> */}
                </a>
                <a href="#" class="nav__link">
                    <i class="far fa-folder-open nav__icon"></i>
                    {/* <span class="nav__text">Projects</span> */}
                </a>
                <a href="#" class="nav__link">
                    <i class="fas fa-share-alt nav__icon"></i>
                    {/* <span class="nav__text">Social</span> */}
                </a>
            </nav>
        </React.Fragment>  
    );
}




export default MenuMobile;