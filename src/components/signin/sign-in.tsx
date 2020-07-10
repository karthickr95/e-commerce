import React, {useState} from 'react';

import './sign-in.styles.scss'

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

const SignIn = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setUser({
            email: '',
            password: ''
        })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    required
                    autoComplete=''
                    value={user.email}
                    handleChange={handleInputChange}
                />
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    required
                    value={user.password}
                    handleChange={handleInputChange}
                />
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    );
};

export default SignIn;