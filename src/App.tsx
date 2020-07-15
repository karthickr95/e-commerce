import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './App.css'

import Header from './components/header/header'
import HomePage from './pages/homepage/homepage'
import SignInRegisterPage from './pages/sign-in-register-page/sign-in-register-page'
import ShopPage from './pages/shoppage/shoppage'

import { auth, createUserProfileDocument } from './firebase/firebase-utils'
import { addUserAction } from './redux/actions'

type AppProps = {}

const App = (props: AppProps) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const unSubscribeListenerForAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth != null) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapshot => {
                    dispatch(addUserAction({
                        id: snapshot.id,
                        createdAt: snapshot.data()?.created_at.toDate(),
                        displayName: snapshot.data()?.display_name,
                        email: snapshot.data()?.email
                    }))
                })
            } else {
                dispatch(addUserAction(null))
            }
        })

        return () => {
            unSubscribeListenerForAuth()
        }
    }, [])

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInRegisterPage} />
            </Switch>
        </div>
    )

}

export default App
