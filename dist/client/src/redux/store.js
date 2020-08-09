"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistor = exports.store = void 0;
const redux_1 = require("redux");
const redux_persist_1 = require("redux-persist");
const redux_logger_1 = __importDefault(require("redux-logger"));
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const root_reducer_1 = __importDefault(require("./root-reducer"));
const middlewares = [redux_thunk_1.default];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(redux_logger_1.default);
}
const store = redux_1.createStore(root_reducer_1.default, redux_1.applyMiddleware(...middlewares));
exports.store = store;
const persistor = redux_persist_1.persistStore(store);
exports.persistor = persistor;
