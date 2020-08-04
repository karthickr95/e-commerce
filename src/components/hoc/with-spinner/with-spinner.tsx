import React from 'react'
import styled from 'styled-components'

const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`

type WithSpinnerProps = {
    isLoading: boolean
}

const withSpinner = <P extends object> (WrappedComponent: React.ComponentType<P>)
    : React.FC<WithSpinnerProps & P> => {

    return ({ isLoading, ...otherProps }: WithSpinnerProps & P) => {

        return isLoading
            ? (
                <SpinnerOverlay>
                    <SpinnerContainer />
                </SpinnerOverlay>)
            : (
                <WrappedComponent {...otherProps as P} />
            )
    }
}

export default withSpinner