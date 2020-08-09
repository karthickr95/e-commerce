"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_persist_1 = require("redux-persist");
const storage_1 = __importDefault(require("redux-persist/lib/storage"));
const user_reducer_1 = __importDefault(require("./user/user-reducer"));
const cart_reducer_1 = __importDefault(require("./cart/cart-reducer"));
const directory_reducer_1 = __importDefault(require("./directory/directory-reducer"));
const shop_reducer_1 = __importDefault(require("./shop/shop-reducer"));
const persistConfig = {
    key: 'root',
    storage: storage_1.default,
    whitelist: ['cart']
};
const rootReducer = redux_1.combineReducers({
    user: user_reducer_1.default,
    cart: cart_reducer_1.default,
    directory: directory_reducer_1.default,
    shop: shop_reducer_1.default
});
exports.default = redux_persist_1.persistReducer(persistConfig, rootReducer);
