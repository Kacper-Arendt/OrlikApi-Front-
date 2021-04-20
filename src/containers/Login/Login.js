import React, { useState } from "react";
import { Redirect, Link } from 'react-router-dom';
import { Logger } from "../Auth/Auth";
import { AuthContext } from '../../App';

import classes from './Login.module.css'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button'

const Login = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isAuth, setAuth } = React.useContext(AuthContext);


    const loginHandler = (event) => {
        event.preventDefault();

        Logger(username, password)
            .then(result => {
                if (result.status === 200) {
                    setAuth(true)
                    setLoggedIn(true);
                }
            },
                (error) => {
                    const resMessage =
                        (error.response.data.message)

                    setError(resMessage);
                }
            );
    };

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }


    return (
        <div className={classes.Login}>
            <h2>Please Sign In</h2>
            <form onSubmit={loginHandler}>
                <Input
                    inputtype="input"
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={e => {
                        setUsername(e.target.value);
                    }}
                />

                <Input
                    inputtype="input"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                />

                {error && (
                    <div className={classes.Message} role="alert">
                        {error}
                    </div>
                )}
                <Button btnType="Success">Login</Button>

            </form>
            <Link className={classes.Signup} to="/signup">Don't have an account?</Link>
        </div>
    );
}

export default Login;