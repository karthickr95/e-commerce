import React from 'react';

import './sign-in-register-page.styles.scss'

import SignIn from "../../components/signin/sign-in";
import Register from "../../components/register/register";

const SignInRegisterPage = () => {
    return (
        <div className='sign-in-register'>
            <SignIn />
            <Register />
        </div>
    );
};

export default SignInRegisterPage;