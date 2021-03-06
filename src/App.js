import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Home from './containers/Home/Home';
import Facilities from './containers/Facilities/Facilities';
import Register from './containers/Register/Register'
import Login from './containers/Login/Login';
import { Logout } from './containers/Auth/Auth'
import GetFacility from "./containers/GetFacility/GetFacility";

export const AuthContext = React.createContext();

function App() {
    const [isAuth, setAuth] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("token");
        if (loggedInUser) {
            setAuth(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setAuth }}>
            <div className={classes.App}>
                <React.Fragment>
                    <Toolbar />
                    <Switch>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/facilities" component={Facilities} />
                        <Route exact path={`/facilities/:id`} component={GetFacility} />
                        <Route path="/" component={Home} />

                    </Switch>
                </React.Fragment>
            </div>
        </AuthContext.Provider>
    );
}
export default App;