import React, {useState} from 'react'

import './register.styles.scss'

import FormInput from "../form-input/form-input"
import CustomButton from "../custom-button/custom-button"

import {auth, createUserProfileDocument} from "../../firebase/firebase-utils"

type RegisterState = {
    displayName: string
    email: string
    password: string
    confirmPassword: string
}

const Register = () => {

    const [registerState, setRegisterState] = useState<RegisterState>({
        confirmPassword: "",
        displayName: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const {displayName, email, password, confirmPassword} = registerState

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }

        try {

            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user!, displayName)

            setRegisterState({
                confirmPassword: "",
                displayName: "",
                email: "",
                password: ""
            })
        } catch (e) {
            console.error(e)
        }

    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterState({...registerState, [e.target.name]: e.target.value})
    }

    return (
        <div className='register'>
            <h2 className="title">I do not have account</h2>
            <span>Sign up with your email and password</span>
            <form className="register-form" onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    required
                    value={registerState.displayName}
                    handleChange={handleInputChange}
                    label='Display Name'
                />
                <FormInput
                    type='email'
                    name='email'
                    required
                    value={registerState.email}
                    handleChange={handleInputChange}
                    label='Email'
                />
                <FormInput
                    type='password'
                    name='password'
                    required
                    value={registerState.password}
                    handleChange={handleInputChange}
                    label='Password'
                />
                <FormInput
                    type='confirmPassword'
                    name='confirmPassword'
                    required
                    value={registerState.confirmPassword}
                    handleChange={handleInputChange}
                    label='Confirm Password'
                />
                <CustomButton type='submit'>Register</CustomButton>
            </form>

        </div>
    );
};

export default Register;