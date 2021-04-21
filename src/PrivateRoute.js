import React, { useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import App, { AuthContext } from './App';


function PrivateRoute({ component: Component, auth, ...rest }) {
    const { isAuth, setAuth } = React.useContext(AuthContext);
    const [authChecked, setAuthChecked] = useState()

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if (token) {
            setAuthChecked(true)
            setAuth(true)
            console.log(authChecked);
        }
    }, [])

    if (!authChecked) return null;

    return (
        <Route
            {...rest}
            render={(props) => isAuth ?
                <Component {...props} />
                :
                <Redirect to="/login" />
            }
        />
    )
}

export default PrivateRoute;