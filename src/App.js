import React from 'react';

import Desktop from './components/DesktopComponents';
import MobileOrTablet from './components/MobileOrTabletComponents'


function App() {
  return (
    <React.Fragment>
        <MobileOrTablet/>
        <Desktop/>
    </React.Fragment>
  );
}

export default App;
