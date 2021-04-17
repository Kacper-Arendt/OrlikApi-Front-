import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Footer from './components/Footer/Foot';
import Home from './containers/Home/Home';
import Facilities from './containers/Facilities/Facilities';
import Login from './containers/Login/Login';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";


function App(props) {
    const [isAuth, setAuth] = useState(true);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("token");
        if (loggedInUser) {
            setAuth(...isAuth, true);
        }
    }, []);

    // if there's no user, show the login form
    let auth = <div>{isAuth}</div>


    return (
        <AuthContext.Provider value={{ isAuth, setAuth }}>
            <div className={classes.App}>
                <Toolbar />
                {auth}
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                    <PrivateRoute path="/facilities" component={Facilities} />

                </Switch>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
