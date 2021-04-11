import React from "react";

import classes from './App.module.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import MainImage from './components/MainImage/MainImage';
import Facilities from './components/Facilities/Facilities'
import Footer from './components/Footer/Foot';

function App() {
    return (
        <div className={classes.App}>
            <Toolbar/>
            <MainImage />
            <Facilities />
            <Footer />
        </div>
    );
}

export default App;
