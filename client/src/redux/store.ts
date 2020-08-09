import { createStore, applyMiddleware, Middleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './root-reducer'

const middlewares: Middleware[] = [thunk]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

const persistor = persistStore(store)

export type AppState = ReturnType<typeof rootReducer>

export { store, persistor }