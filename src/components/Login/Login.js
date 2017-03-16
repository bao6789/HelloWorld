import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native'
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return ( 
        < KeyboardAvoidingView style = {styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../images/media.png')}/>

                <Text style={styles.title}>Login system using React Native</Text>
            </View>
            <View style={styles.formContainer}>
                <LoginForm/>
            </View>
         </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2980b9'
    },
    logoContainer:{
        alignItems:'center',
        flexGrow:1,
        justifyContent: 'center'
    },
     logo: {
    width: 100,
    height: 100
  },
  title: {
      color: '#FFF',
      marginTop: 10,
      width: 160,
      textAlign: 'center',
      opacity: 0.9
  }
});