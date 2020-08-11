import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from './redux/user/user-selector'

import { GlobalStyle } from './global-styles'
import { useFirebaseAuth } from './hooks/auth-state-change-hook'

import Header from './components/header/header'
import Spinner from './components/spinner/spinner'
import ErrorBoundary from './components/error-boundary/error-boundary'

const HomePage = lazy(() => import('./pages/home-page'))
const SignInRegisterPage = lazy(() => import('./pages/sign-in-register-page'))
const ShopPage = lazy(() => import('./pages/shop-page'))
const CheckoutPage = lazy(() => import('./pages/checkout-page'))

const App = () => {

    const currentUser = useSelector(selectCurrentUser)

    useFirebaseAuth()

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route exact path='/checkout' component={CheckoutPage} />
                        <Route
                            exact
                            path='/signin'
                            render={() =>
                                currentUser
                                    ? <Redirect to='/' />
                                    : <SignInRegisterPage />
                            }
                        />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    )

}

export default App
