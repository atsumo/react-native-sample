import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Navigator, Dimensions } from 'react-native'
import { SocialIcon } from 'react-native-elements'

const { width, height } = Dimensions.get('window');

export default class Login extends Component {
  constructor(props){
    super(props);
  }
  onPress() {
    //TOPへ移動
    //this.props.navigator.replace({id: "top"});
    this.props.navigator.push({id: "top"});
  }
  render() {
    const imageURL = `https://placeimg.com/${width}/${height}/any?t=${Date.now()}`;
    return (
      <View style={{flex:1}}>
        <Image source={{uri: imageURL}} resizeMode = "stretch" style={{flex:1, alignItems:'center', width:null, height:null, justifyContent:'space-between'}}>
          <View style={{flex:1, height: 120, width: width-20, top: height - 120}}>
            <SocialIcon
              style = {styles.socialButton}
              title = 'Sign In With Facebook'
              type='facebook'
              onPress = {() => this.onPress()}
              button
            />
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  socialButton: {
  }
});
