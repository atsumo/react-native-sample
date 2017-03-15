import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { SocialIcon } from 'react-native-elements'

export default class Index extends Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <Image style={{ flex: 1, width:null, height:null, resizeMode: 'stretch'}} source={require('../images/image01.jpg')}>

        </Image>
      </View>
    );
  }
}
