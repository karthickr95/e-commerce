import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import SignInRegisterPage from "./pages/sign-in-register-page/sign-in-register-page";
import ShopPage from "./pages/shoppage/shoppage";

import firebase, {auth, createUserProfileDocument} from "./firebase/firebase-utils"

type AppProps = {}
type AppState = {
    currentUser: {
        id: string
        displayName: string
        createdAt: Date
        email: string
    } | null
}

class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unSubscribeListenerForAuth: firebase.Unsubscribe | null = null

    componentDidMount() {
        this.unSubscribeListenerForAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth != null) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            createdAt: snapshot.data()?.created_at.toDate(),
                            displayName: snapshot.data()?.display_name,
                            email: snapshot.data()?.email
                        }
                    })
                })

                console.log(this.state)
            } else {
                this.setState({
                    currentUser: null
                })
            }
        })
    }

    componentWillUnmount() {
        this.unSubscribeListenerForAuth?.()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInRegisterPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
