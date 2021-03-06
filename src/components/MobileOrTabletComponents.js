import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Components

import Footer from './Footer';
import MenuMobile from './MenuMobile';
import AboutMeBis from './AboutMeBis';
import Skills from './Skills';
import Projects from './Projects';
import Particulas from './tsParticles';
import ParticulasHotFix from './tsParticles2';


const MobileOrTablet = ({ children }) => {
    const isMobileOrTablet = useMediaQuery({ maxWidth: 991 })
    return isMobileOrTablet ? children : null;
  }


function MobileAndTabletComponents(){

    return(

        <React.Fragment>

            <MobileOrTablet>
                <MenuMobile/>
                <div
                className="gradient-background"
                style={{
                width: "100vw",
                height: "100vh"
                }}
                >
                    <Particulas />
                <div
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
                >
                <AboutMeBis
                    onMobile = {true}
                /> 
                </div>
                </div>


                <Skills
                    onMobile = {true}
                />
                <Projects/>

                <div className="particle-hot-fix">
                    <ParticulasHotFix />
                </div>

                <Footer
                    onMobile = {true}
                />
       
            </MobileOrTablet>

        </React.Fragment>

    )
   
} 

export default MobileAndTabletComponents;