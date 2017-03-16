import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Splash extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <View style ={styles.titleWrapper}>
          <Text style={styles.title}>
            Say something!
          </Text>
        </View>
        <View>
          <Text style={styles.subtitle}>
            Powered by Hoai Bao
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2980b9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    padding: 10
  },
  titleWrapper:{
      flex:1,
      justifyContent:'center'
  }
})
