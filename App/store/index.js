import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import messagesReducer from './messages'
import authReducer from './auth'

const reducer = combineReducers({
  messages: messagesReducer,
  auth: authReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store