import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from './src/screens/AppNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <AppNavigator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
