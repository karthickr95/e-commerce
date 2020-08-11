import React from 'react'
import Spinner from '../../spinner/spinner'

type WithSpinnerProps = {
    isLoading: boolean
}

const withSpinner = <P extends object> (WrappedComponent: React.ComponentType<P>)
    : React.FC<WithSpinnerProps & P> => {

    return ({ isLoading, ...otherProps }: WithSpinnerProps & P) => {

        return isLoading
            ? (<Spinner />)
            : (<WrappedComponent {...otherProps as P} />)
    }
}

export default withSpinner