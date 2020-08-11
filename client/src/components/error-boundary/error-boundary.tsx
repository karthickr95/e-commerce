import React from 'react'
import styled from 'styled-components'
import errorImage from '../../assets/error-boundary.png'

const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: url(${errorImage});
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`

const ErrorImageText = styled.h2`
  font-size: 28px;
  color: black;
`

type ErrorBoundaryState = {
    hasError: boolean
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {

    state: ErrorBoundaryState = {
        hasError: false
    }

    static getDerivedStateFromError (error: any) {
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: React.ErrorInfo) {
        console.log(error)
    }

    render () {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer />
                    <ErrorImageText>This Page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary