// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

// create a component
export default class LoginForm extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          placeholderTextColor='rgba(255,255,255,0.7)'
          onSubmitEditing={()=>this.passwordInput.focus()}
          returnKeyType='next' />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='rgba(255,255,255,0.7)'
          returnKeyType='go'
          secureTextEntry 
          ref={(input)=>this.passwordInput=input}
          />
        <TouchableOpacity style={styles.buttonContainer} onPress={alert('Do you want to say some thing?')}>
          <Text style={styles.buttonText}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#1abc9c',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
})
