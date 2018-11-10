import React from 'react'
import { Provider } from 'react-redux'
import io from 'socket.io-client'

export const socket = io('https://voice21.herokuapp.com/')

import store from './store'
import { _writeMessage } from './store/messages'
import Main from './Components/Main'

socket.on('connect', () => {
  console.log(socket.id)
  socket.on('new-message', message => {
    store.dispatch(_writeMessage(message))
  })
})

export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}


