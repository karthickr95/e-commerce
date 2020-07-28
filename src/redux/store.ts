import { createStore, applyMiddleware, Middleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer'

const middlewares: Middleware[] = []

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