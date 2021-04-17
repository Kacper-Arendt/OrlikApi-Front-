import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from './App';


function PrivateRoute({ component: Component, ...rest }) {
    const { isAuth } = React.useContext(AuthContext);
    console.log({ isAuth });
    return (
        <Route
            {...rest}
            render={props =>
                isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

export default PrivateRoute;