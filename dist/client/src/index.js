"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const react_2 = require("redux-persist/integration/react");
require("./index.css");
const App_1 = __importDefault(require("./App"));
const store_1 = require("./redux/store");
react_dom_1.default.render(<react_redux_1.Provider store={store_1.store}>
        <react_router_dom_1.BrowserRouter>
            <react_2.PersistGate persistor={store_1.persistor}>
                <App_1.default />
            </react_2.PersistGate>
        </react_router_dom_1.BrowserRouter>
    </react_redux_1.Provider>, document.getElementById('root'));
