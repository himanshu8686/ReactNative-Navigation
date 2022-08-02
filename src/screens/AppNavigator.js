import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomHeader from '../components/CustomHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

export default class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="DashBoard" component={BottomTabs} />
          <Drawer.Screen name="notification" component={NotificationScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}


function NotificationScreen({navigation}) {
  return (
    <View>
      <CustomHeader
        title="Notification"
        navigation={navigation}
        isMenu={false}
      />
      <Text>Notification</Text>
    </View>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
