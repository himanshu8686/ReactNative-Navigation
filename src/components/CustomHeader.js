import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from 'react-native-paper';

export default class CustomHeader extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          borderWidth: 1,
          borderColor: 'red',
        }}>
        <View
          style={{
            flex: 0.5,
            borderColor: 'red',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {this.props.isMenu ? (
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" type={'feather'} size={25} color={Colors.black} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="chevron-back" type={'ionicons'} size={25} color={Colors.black} />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            borderColor: 'red',
            borderWidth: 1,
          }}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 18}}>
            {this.props.title}
          </Text>
        </View>
        <View style={{flex: 1, borderColor: 'red', borderWidth: 1}}></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  leftViewContainer: {
    flex: 0.5,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    height: 55,
    borderWidth: 1,
    borderColor: 'red',
  },
});
