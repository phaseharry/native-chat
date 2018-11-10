import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { connect } from 'react-redux'

import { postMessage } from '../store/messages'

class Chat extends React.Component{
  constructor(){
    super()
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSend = this.onSend.bind(this)
  }
  handleChange(text){
    this.setState({text})
  }
  onSend(){
    const { postMessage } = this.props
    const { text } = this.state
    return postMessage(text)
    .then(() => this.setState({text: ''}))
  }
  render(){
    const { messages, userId } = this.props
    const { text } = this.state
    const { onSend, handleChange } = this
    //console.log(messages)
    return (
      <GiftedChat messages={messages} user={{_id: userId}} text={text} onInputTextChanged={text => handleChange(text)} onSend={onSend}/>
    ) 
  }


}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    userId: state.auth._id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postMessage: message => dispatch(postMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

