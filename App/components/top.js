
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Navigator, Dimensions } from 'react-native'
import { SocialIcon, Tabs } from 'react-native-elements'

const { width, height } = Dimensions.get('window');
const IMAGE_PATH_BASE = `https://placeimg.com/${width}/${height}/any`;
const INTERVAL = 2000;

export default class Top extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: `${IMAGE_PATH_BASE}?t=${Date.now()}`
    };
  }
  _tick() {
    this.setState({image: `${IMAGE_PATH_BASE}?t=${Date.now()}`});
  }
  componentDidMount() {
    console.log('timer start');
    this.interval = setInterval(() => this._tick(), INTERVAL);
  }
  componentWillUnmount() {
    console.log('clear');
    clearInterval(this.interval);
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Image source={{uri: this.state.image}} resizeMode = "stretch" style={{flex:1, alignItems:'center', width:null, height:null}}>
        </Image>
      </View>
    );
  }
}
