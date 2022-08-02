import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CustomHeader from '../components/CustomHeader'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
      <CustomHeader title="Home" navigation={this.props.navigation} isMenu ={true}/>
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({})
