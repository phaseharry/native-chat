import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

import { loadMessages } from '../store/messages'
import Chat from './Chat'

class App extends React.Component {
  componentDidMount(){
    this.props.loadMessages()
  }
  render() {
    return (
      <View style={styles.container}>
        <Chat />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    loadMessages: () => dispatch(loadMessages())
  }
}

export default connect(null, mapDispatchToProps)(App)