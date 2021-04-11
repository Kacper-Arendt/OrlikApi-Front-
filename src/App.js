import React from "react";

import classes from './App.module.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import MainImage from './components/MainImage/MainImage';

function App() {
    return (
        <div className={classes.App}>
            <Toolbar/>
            <MainImage />
        </div>
    );
}

export default App;
