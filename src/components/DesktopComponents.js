import React from 'react';
import { useMediaQuery } from 'react-responsive';


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
                <Header />
                <Footer />
            </Desktop>

        </React.Fragment>


    )
} 

export default DesktopComponents;