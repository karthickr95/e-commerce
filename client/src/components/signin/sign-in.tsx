import React, {useState} from 'react'
import styled from 'styled-components'

import {auth, signInWithGoogle} from "../../firebase/firebase-utils"

import FormInput from "../form-input/form-input"
import { NormalButton } from '../button/button'
import { GoogleSignInButton } from '../button/button'

const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`

const SignInTitle = styled.h2`
  margin: 10px 0;
`

const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

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
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
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
                <ButtonsBarContainer>
                    <NormalButton type="submit">Sign In</NormalButton>
                    <GoogleSignInButton onClick={signInWithGoogle}>Sign in with Google{''}</GoogleSignInButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
};

export default SignIn;