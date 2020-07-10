import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import SignInRegisterPage from "./pages/sign-in-register-page/sign-in-register-page";
import ShopPage from "./pages/shoppage/shoppage";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInRegisterPage} />
            </Switch>
        </div>
    );
}

export default App;
