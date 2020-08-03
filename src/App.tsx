import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from './redux/user/user-selector'

import './App.css'

import Header from './components/header/header'
import HomePage from './pages/home-page'
import SignInRegisterPage from './pages/sign-in-register-page'
import ShopPage from './pages/shop-page'
import CheckoutPage from './pages/checkout-page'

import { useFirebaseAuth } from './custom-hooks/auth-state-change-hook'

const App = () => {

    const currentUser = useSelector(selectCurrentUser)

    useFirebaseAuth()

    return (
        <div>
            <Header />
            <Switch>
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
            </Switch>
        </div>
    )

}

export default App
