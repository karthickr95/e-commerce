import React from 'react'
import styled from 'styled-components'

import SignIn from '../components/signin/sign-in'
import Register from '../components/register/register'

const SignInAndRegisterContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`

const SignInRegisterPage = () => {
    return (
        <SignInAndRegisterContainer>
            <SignIn />
            <Register />
        </SignInAndRegisterContainer>
    )
}

export default SignInRegisterPage