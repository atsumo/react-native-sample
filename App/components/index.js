import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Navigator } from 'react-native'
import { SocialIcon } from 'react-native-elements'


import Login from './login';
import Top from './top';

export default class Index extends Component {

  renderScene(route, navigator) {
    const {state,actions} = this.props;
    const routeId = route.id;

    if (routeId === 'login') {
      return (
        <Login
          {...this.props}
          navigator={navigator}
        />
      );
    }

    if (routeId === 'top') {
      return (
        <Top
          {...this.props}
          navigator={navigator} />
      );
    }
  }
  render() {
    return (
      <View style={{ flex:1 }}>
        <Navigator style={{flex: 1}} ref={'NAV'} initialRoute={{id: 'login', name: 'login'}} renderScene={this.renderScene.bind(this)}/>
      </View>
    );
  }
}
