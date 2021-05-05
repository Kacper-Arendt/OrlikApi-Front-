import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from './App';


function PrivateRoute({ component: Component, auth, ...rest }) {
    const { isAuth } = React.useContext(AuthContext);
    const [authChecked, setAuthChecked] = useState()

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        console.log(isAuth);
        if (token) {
            setAuthChecked(true)
        }
    }, [isAuth])

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