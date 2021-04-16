import React from "react";
import {Route, Switch} from 'react-router-dom';

import classes from './App.module.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Footer from './components/Footer/Foot';
import Home from './containers/Home/Home';
import Facilities from './containers/Facilities/Facilities';
import Login from './containers/Login/Login';


function App() {
    return (
        <div className={classes.App}>
            <Toolbar/>
            <Switch>
                <Route exact path="/facilities"  component={Facilities}/>
                <Route exact path="/login"  component={Login}/>
                <Route exact path="/"  component={Home}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
