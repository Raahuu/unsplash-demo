import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import RootReducer from './reducer'
import Watchers from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(Watchers)

export default store
