import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Particulas from './tsParticles';

// Components

import Header from './Header';
import Footer from './Footer';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null;
  }


function DesktopComponents(){
    return(
        <React.Fragment>

            <Desktop>
                <div
                className="gradient-background"
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
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
                    <Header />
                    <Footer />
                {/* You can render <Route> and <NavTabs /> here */}
                </div>
                </div>
            </Desktop>

        </React.Fragment>


    )
} 

export default DesktopComponents;