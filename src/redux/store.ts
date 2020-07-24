import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import userReducer from "./user-reducer"
import cartReducer from './cart-reducer'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

const middlewares = [logger]

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export type AppState = ReturnType<typeof rootReducer>

export default store