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

    if(Desktop != null){
    return(
        <React.Fragment>

            <Desktop>
                <Header />
            </Desktop>

            <Desktop>
                <Footer />
            </Desktop>

        </React.Fragment>


    )
   }
} 

export default DesktopComponents;