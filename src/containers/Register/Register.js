import React, { useState } from "react";
import { Link } from 'react-router-dom';

import classes from './Register.module.css';
import Input from "../../components/UI/Input/Input";
import Button from '../../components/UI/Button/Button';

function Register() {
    const [setEmail] = useState("");
    const [setPassword] = useState("");
    const [setFirstName] = useState("");
    const [setLastName] = useState("");
  
    return (
        <div className={classes.Register}>
            <h2>Sign Up</h2>
            <form>
                <Input
                    placeholder="Email"
                    inputtype="input"
                    type="email"
                    onChange={e => {
                        setEmail(e.target.value);
                    }}
                />
                <Input
                    placeholder="Password"
                    inputtype="input"
                    type="password"
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                />
                <Input
                    placeholder="First Name"
                    inputtype="input"
                    type="text"
                    onChange={e => {
                        setFirstName(e.target.value);
                    }}
                />

                <Input inputtype="input"
                    type="text"
                    placeholder="LastName"
                    onChange={e => {
                        setLastName(e.target.value);
                    }}
                />
                <Input inputtype="checkbox" id="terms" text="Agree To Terms?" />

            </form>
            <Button btnType="Success">Submit</Button>
            <Link className={classes.SignIn} to="/login">Already have an account?</Link>
        </div >
    )
}

export default Register;