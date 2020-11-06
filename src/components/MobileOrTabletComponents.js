import React from 'react';
import { useMediaQuery } from 'react-responsive';


// Components

import Footer from './Footer';
import MenuMobile from './MenuMobile';
import AboutMe from './AboutMe';
import AboutMeBis from './AboutMeBis';
import Skills from './Skills';
import Projects from './Projects';



const MobileOrTablet = ({ children }) => {
    const isMobileOrTablet = useMediaQuery({ maxWidth: 991 })
    return isMobileOrTablet ? children : null;
  }


function MobileAndTabletComponents(){

    /* if(isMobileOrTablet != null){ */
    return(

        <React.Fragment>

            <MobileOrTablet>
                <MenuMobile/>
                <AboutMe/>
                <AboutMeBis/>
                <Skills/>
                <Projects/>
                <Footer/>
            </MobileOrTablet>

        </React.Fragment>

    )
   /* } */
} 

export default MobileAndTabletComponents;