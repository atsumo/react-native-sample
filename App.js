import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import Components from './App/components/';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Components />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
