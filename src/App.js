import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Footer from './components/Footer/Foot';
import Home from './containers/Home/Home';
import Facilities from './containers/Facilities/Facilities';
import Login from './containers/Login/Login';
import { Logout } from './containers/Auth/Auth'
// import Logout from './containers/Logout/Logout'
import PrivateRoute from './PrivateRoute';

export const AuthContext = React.createContext();

function App(props) {
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
                <Toolbar />
                <Switch>

                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <Route path="/" component={Home} />
                    <PrivateRoute path="/facilities" component={Facilities} />

                </Switch>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
