import React, { useRef, useState } from "react";
import classes from './Login.module.css'
import Input from '../../components/UI/Input/Input';

import { login } from "../Auth/Auth";


const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'username') {
            setUsername(value)
        } else if (name === 'password') {
            setPassword(value)
        }
    }

    const loginHandler = (event) => {
        event.preventDefault();

        setMessage('');


        login(username, password)
            .then(
                () => {
                    props.history.push("/");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response.data.message)

                    setMessage(resMessage);
                }
            );
    };


    return (
        <div className={classes.Login}>
            <h2>Please Sign In</h2>
            <form onSubmit={loginHandler} ref={form}>
                <Input
                    inputType="input"
                    type="text"
                    name="username"
                    placeholder="Your Email"
                    onChange={(event) => {
                        onChangeHandler(event)
                    }}
                />

                <Input
                    inputType="input"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    onChange={(event) => {
                        onChangeHandler(event)
                    }}
                />

                {message && (
                    <div className={classes.Message} role="alert">
                        {message}
                    </div>
                )}
                <button ref={checkBtn}>Login</button>
            </form>
        </div>
    );
}

export default Login;