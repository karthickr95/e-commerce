"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const user_selector_1 = require("./redux/user/user-selector");
require("./App.css");
const header_1 = __importDefault(require("./components/header/header"));
const home_page_1 = __importDefault(require("./pages/home-page"));
const sign_in_register_page_1 = __importDefault(require("./pages/sign-in-register-page"));
const shop_page_1 = __importDefault(require("./pages/shop-page"));
const checkout_page_1 = __importDefault(require("./pages/checkout-page"));
const auth_state_change_hook_1 = require("./hooks/auth-state-change-hook");
const App = () => {
    const currentUser = react_redux_1.useSelector(user_selector_1.selectCurrentUser);
    auth_state_change_hook_1.useFirebaseAuth();
    return (<div>
            <header_1.default />
            <react_router_dom_1.Switch>
                <react_router_dom_1.Route exact path='/' component={home_page_1.default}/>
                <react_router_dom_1.Route path='/shop' component={shop_page_1.default}/>
                <react_router_dom_1.Route exact path='/checkout' component={checkout_page_1.default}/>
                <react_router_dom_1.Route exact path='/signin' render={() => currentUser
        ? <react_router_dom_1.Redirect to='/'/>
        : <sign_in_register_page_1.default />}/>
            </react_router_dom_1.Switch>
        </div>);
};
exports.default = App;
