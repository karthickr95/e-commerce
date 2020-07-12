import React, {useState} from 'react'

import './sign-in.styles.scss'

import FormInput from "../form-input/form-input"
import CustomButton from "../custom-button/custom-button"

import {auth, signInWithGoogle} from "../../firebase/firebase-utils"

const SignIn = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const {email, password} = user

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setUser({email: '', password: ''})
        } catch (e) {
            console.error(e)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div className='sign-in'>
            <h2 className="title">I already have an account</h2>
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
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google{''}</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;