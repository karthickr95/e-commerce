import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './App.css'

import Header from './components/header/header'
import HomePage from './pages/homepage/homepage'
import SignInRegisterPage from './pages/sign-in-register-page/sign-in-register-page'
import ShopPage from './pages/shoppage/shoppage'

import { AppState } from './redux/store'
import { useFirebaseAuth } from './custom-hooks/auth-state-change-hook'

const App = () => {

    const currentUser = useSelector<AppState>(state => state.user.currentUser)

    useFirebaseAuth()

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
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
