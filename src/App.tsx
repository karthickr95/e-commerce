import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import SignInRegisterPage from "./pages/sign-in-register-page/sign-in-register-page";
import ShopPage from "./pages/shoppage/shoppage";

import firebase, {auth} from "./firebase/firebase-utils"

type AppProps = {}
type AppState = {
    currentUser: firebase.User | null
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
        this.unSubscribeListenerForAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
        })
    }

    componentWillUnmount() {
        this.unSubscribeListenerForAuth?.()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
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
