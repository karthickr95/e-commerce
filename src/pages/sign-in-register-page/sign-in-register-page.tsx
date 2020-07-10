import React from 'react';

import './sign-in-register-page.styles.scss'

import SignIn from "../../components/signin/sign-in";

const SignInRegisterPage = () => {
    return (
        <div className='sign-in-register'>
            <SignIn />
        </div>
    );
};

export default SignInRegisterPage;