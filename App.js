import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import Container from './App/container/';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Container />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
