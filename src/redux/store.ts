import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import userReducer from "./user-reducer"

const rootReducer = combineReducers({
    user: userReducer
})

const middlewares = [logger]

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export type AppState = ReturnType<typeof rootReducer>

export default store