import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './Screens/login'

export default function App() {
  return (
    <AppContainer/>
);
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
 })

 

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
