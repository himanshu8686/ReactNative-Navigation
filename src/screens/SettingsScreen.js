import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
       <CustomHeader title="Settings" navigation={this.props.navigation} isMenu={true}/>
        <View style={styles.container}>
          <Text>Settings Screen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
